const mongoose = require('mongoose')
const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroOptions = require('../admin')

const express = require('express')
const app = express()

const adminBro = new AdminBro(AdminBroOptions)

const router = AdminBroExpress.buildRouter(adminBro)
app.use(adminBro.options.rootPath, router)

const run = async () => {
  const mongooseConnection = await mongoose.connect(process.env.MONGO_URL)
  app.listen(8080, () => console.log('AdminBro is under localhost:8080/admin'))
}

run()
