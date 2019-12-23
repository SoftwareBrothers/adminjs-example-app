const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')
const AdminBroSequelizejs = require('admin-bro-sequelizejs')
const sequelize = require('sequelize')
AdminBro.registerAdapter(AdminBroMongoose)
AdminBro.registerAdapter(AdminBroSequelizejs)

const SequelizeDb = require('../sequelize/models')

const menu = {
  mongoose: { name: 'Mongoose Resources', icon: 'icon-mongodb' },
  sequelize: { name: 'Sequelize Resources', icon: 'icon-postgres' },
  customized: { name: 'Customized Resources', icon: 'fas fa-marker' }
}

const user = require('./resources/user')
const page = require('./resources/page')
const blogPost = require('./resources/blog-post')
const article = require('./resources/article')
const complicated = require('./resources/complicated')
const comment = require('./resources/comment')
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
    { resource: CategoryModel, options: { parent: menu.mongoose, sort, properties: timestamps } },
    { resource: ComplicatedModel, options: { parent: menu.mongoose, ...complicated } },
    // { resource: UploadsModel, options: { parent: menu.mongoose, ...uploads } },
    { resource: SequelizeDb.sequelize.models.User, options: { parent: menu.sequelize, sort, properties: timestamps } },
    { resource: SequelizeDb.sequelize.models.FavouritePlace, options: { parent: menu.sequelize, sort, properties: timestamps } },
    { resource: UserModel, options: { parent: menu.customized, ...user } },
    { resource: PageModel, options: { parent: menu.customized, ...page } },
    { resource: require('../mongoose/blog-post-model'), options: { parent: menu.default, ...blogPost } },
    { resource: require('../mongoose/article-model'), options: { parent: menu.customized, ...article } },
  ],
  version: {
    admin: true,
  },
  branding: {
    companyName: 'Some demo',
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
  dashboard: {
    handler: async (request, response, data) => {
      const categories = await CategoryModel.find({}).limit(5)
      return {
        usersCount: await UserModel.countDocuments(),
        pagesCount: await PageModel.countDocuments(),
        categories: await Promise.all(categories.map(async c => {
          const comments = await CommentModel.countDocuments({ category: c._id })
          return {
            title: c.title,
            comments,
            _id: c._id,
          }
        }))
      }
    },
    component: AdminBro.bundle('./components/dashboard'),
  },
}

