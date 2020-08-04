const AdminBroOptions = require('../admin')

const Hapi = require('@hapi/hapi')
const mongoose = require('mongoose')

const AdminBroPlugin = require('@admin-bro/hapi')

const ADMIN = {
  password: 'password',
  email: 'test@example.com',
}

const start = async () => {
  try {
    const server = Hapi.server({
      port: process.env.PORT || 8080,
    })
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true })

    await server.register({
      plugin: AdminBroPlugin,
      options: {...AdminBroOptions, auth: {
        authenticate: async (email, password) => {
          if (ADMIN.password === password && email === ADMIN.email ) {
            return {
              title: 'Administrator',
              ...ADMIN,
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