const AdminBroOptions = require('../admin')

const Hapi = require('hapi')
const mongoose = require('mongoose')
const Bcrypt = require('bcrypt')

const AdminBroPlugin = require('admin-bro-hapijs')
const AdminModel = require('../mongoose/admin-model')

/**
 * Creates first admin test@example.com:password when there are no
 * admins in the database
 */
const createAdminIfNone = async () => {
  const existingAdmin = await AdminModel.countDocuments() > 0
  if (!existingAdmin) {
    const password = await Bcrypt.hash('password', 10)
    const admin = new AdminModel({ email: 'test@example.com', password })
    await admin.save()
  }
}

const start = async () => {
  try {
    const server = Hapi.server({ port: process.env.PORT || 8080 })
    const mongooseConnection = await mongoose.connect(process.env.MONGO_URL)

    await createAdminIfNone()

    await server.register({
      plugin: AdminBroPlugin,
      options: {...AdminBroOptions, auth: {
        authenticate: async (email, password) => {
          const admin = await AdminModel.findOne({ email })
          if (admin && Bcrypt.compare(password, admin.password)) {
            return admin
          }
          return null
        },
        strategy: 'session',
        cookieName: 'adminBroCookie',
        cookiePassword: process.env.COOKIE_PASSWORD || 'makesurepasswordissecuremakesurepasswordissecure',
        isSecure: false,
        defaultMessage: 'Login: test@example.com, Password: password',
      }},
    })

    await server.start()
    console.log('Server running at:', server.info.uri)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

start()
