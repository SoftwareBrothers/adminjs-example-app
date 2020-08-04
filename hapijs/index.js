const AdminBroOptions = require('../admin')

const Hapi = require('@hapi/hapi')
const mongoose = require('mongoose')
const Argon2 = require('argon2')

const AdminBroPlugin = require('@admin-bro/hapi')
const AdminModel = require('../mongoose/admin-model')

/**
 * Creates first admin test@example.com:password when there are no
 * admins in the database
 */
const createAdminIfNone = async () => {
  const existingAdmin = await AdminModel.countDocuments() > 0
  if (!existingAdmin) {
    const password = await Argon2.hash('password')
    const admin = new AdminModel({ email: 'test@example.com', password })
    await admin.save()
  }
}

const start = async () => {
  try {
    const server = Hapi.server({
      port: process.env.PORT || 8080,
    })
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })
    await createAdminIfNone()

    await server.register({
      plugin: AdminBroPlugin,
      options: {...AdminBroOptions, auth: {
        authenticate: async (email, password) => {
          const admin = await AdminModel.findOne({ email })
          if (admin && await Argon2.verify(admin.password, password)) {
            return {
              title: 'Administrator',
              ...admin.toJSON(),
            }
          }
          return null
        },
        strategy: 'session',
        cookieName: 'admin-bro-cookie',
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