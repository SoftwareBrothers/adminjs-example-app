const AdminBro = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
const AdminBroSequelizejs = require('@admin-bro/sequelize')

AdminBro.registerAdapter(AdminBroMongoose)
AdminBro.registerAdapter(AdminBroSequelizejs)

const mongooseModels = require('../adapters/mongoose/models')
const sequelizeDb = require('../adapters/sequelize/models')

const user = require('./resources/user')
const page = require('./resources/page')
const blogPost = require('./resources/blog-post')
const article = require('./resources/article')
const complicated = require('./resources/complicated')
const comment = require('./resources/comment')
const category = require('./resources/category')
const test = require('./resources/test')
const uploads = require('./resources/uploads')
const { sort, timestamps } = require('./resources/sort')

const menu = {
  mongoose: { name: 'mongooseResources', icon: 'SpineLabel' },
  sequelize: { name: 'sequelizeResources', icon: 'Sql' },
}

module.exports = {
  resources: [
    { resource: mongooseModels.Comment, options: { parent: menu.mongoose, ...comment } },
    { resource: mongooseModels.Category, options: { parent: menu.mongoose, ...category } },
    { resource: mongooseModels.Complicated, options: { parent: menu.mongoose, ...complicated } },
    { resource: mongooseModels.Uploads, options: { parent: menu.mongoose, ...uploads } },
    { resource: mongooseModels.User, options: { parent: menu.mongoose, ...user } },
    { resource: mongooseModels.Page, options: { parent: menu.mongoose, ...page } },
    { resource: mongooseModels.BlogPost, options: { parent: menu.mongoose, ...blogPost } },
    { resource: mongooseModels.Article, options: { parent: menu.mongoose, ...article } },
    { resource: mongooseModels.Thing, options: { parent: menu.mongoose } },
    { resource: sequelizeDb.sequelize.models.User, options: { parent: menu.sequelize, sort, properties: timestamps } },
    { resource: sequelizeDb.sequelize.models.FavouritePlace, options: { navigation: menu.sequelize, sort, properties: timestamps } },
    { resource: sequelizeDb.sequelize.models.UserProfile, options: { parent: menu.sequelize } },
    { resource: sequelizeDb.sequelize.models.Test, options: { parent: menu.sequelize, ...test} },
  ],
  version: {
    admin: true,
    app: '1.2.3-beta'
  },
  branding: {
    companyName: 'AdminBro demo page',
  },
  pages: {
    customPage: {
      label: "Custom page",
      handler: async (request, response, context) => {
        return {
          text: 'I am fetched from the backend',
        }
      },
      component: AdminBro.bundle('./components/some-stats'),
    },
  },
  locale: {
    translations: {
      messages: {
        loginWelcome: "to the demo application made with AdminBro - the best admin framework for Node.js apps, based on React."
      }
    }
  }
}

