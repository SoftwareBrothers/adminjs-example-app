const mongoose = require('mongoose')
const AdminBro = require('admin-bro')
const AdminBroExpress = require('@admin-bro/express')
const AdminBroOptions = require('../admin')

const express = require('express')
const app = express()

const adminBro = new AdminBro(AdminBroOptions)

const ADMIN = {
  email: 'admin@example.com',
  password: 'password',
}

// const router = AdminBroExpress.buildRouter(adminBro)
const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email, password) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN
    }
    return null
  },
  cookieName: 'adminbro',
  cookiePassword: 'somepassword',
})

app.use(adminBro.options.rootPath, router)

const run = async () => {
  const mongooseConnection = await mongoose.connect(process.env.MONGO_URL)
  app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
}

run()
