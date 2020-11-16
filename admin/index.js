const AdminBro = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
const AdminBroSequelizejs = require('@admin-bro/sequelize')
const sequelize = require('sequelize')
AdminBro.registerAdapter(AdminBroMongoose)
AdminBro.registerAdapter(AdminBroSequelizejs)

const SequelizeDb = require('../sequelize/models')

const menu = {
  mongoose: { name: 'mongooseResources', icon: 'SpineLabel' },
  sequelize: { name: 'sequelizeResources', icon: 'Sql' },
  customized: { name: 'customizedResources', icon: 'NoodleBowl' }
}

const user = require('./resources/user')
const page = require('./resources/page')
const blogPost = require('./resources/blog-post')
const article = require('./resources/article')
const complicated = require('./resources/complicated')
const comment = require('./resources/comment')
const category = require('./resources/category')
const test = require('./resources/test')
// const uploads = require('./resources/uploads')

const UserModel = require('../mongoose/user-model')
const PageModel = require('../mongoose/page-model')
const CategoryModel = require('../mongoose/category-model')
const CommentModel = require('../mongoose/comment-model')
const ComplicatedModel = require('../mongoose/complicated-model')
const { sort, timestamps } = require('./resources/sort')

module.exports = {
  resources: [
    { resource: CommentModel, options: { parent: menu.mongoose, ...comment } },
    { resource: CategoryModel, options: { parent: menu.mongoose, ...category } },
    { resource: ComplicatedModel, options: { parent: menu.mongoose, ...complicated } },
    // { resource: UploadsModel, options: { parent: menu.mongoose, ...uploads } },
    { resource: SequelizeDb.sequelize.models.User, options: { parent: menu.sequelize, sort, properties: timestamps } },
    { resource: SequelizeDb.sequelize.models.FavouritePlace, options: { parent: menu.sequelize, sort, properties: timestamps } },
    { resource: SequelizeDb.sequelize.models.UserProfile, options: { parent: menu.sequelize } },
    { resource: SequelizeDb.sequelize.models.Test, options: { parent: menu.sequelize, ...test} },
    { resource: UserModel, options: { parent: menu.customized, ...user } },
    { resource: PageModel, options: { parent: menu.customized, ...page } },
    { resource: require('../mongoose/blog-post-model'), options: { parent: menu.default, ...blogPost } },
    { resource: require('../mongoose/article-model'), options: { parent: menu.customized, ...article } },
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

