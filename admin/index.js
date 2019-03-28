const AdminBro = require('admin-bro')
const AdminBroMongoose = require('admin-bro-mongoose')
const AdminBroSequelizejs = require('admin-bro-sequelizejs')
const sequelize = require('sequelize')
AdminBro.registerAdapter(AdminBroMongoose)
AdminBro.registerAdapter(AdminBroSequelizejs)

const DashboardPage = require('./pages/dashboard-page')

const SequelizeDb = require('../sequelize/models')

const menu = {
  default: { name: 'Default Resources', icon: 'fas fa-ad' },
  customized: { name: 'Customized Resources', icon: 'fas fa-marker' }
}

const user = require('./resources/user')
const page = require('./resources/page')
const blogPost = require('./resources/blog-post')
const article = require('./resources/article')

module.exports = {
  resources: [
    { resource: require('../mongoose/comment-model'), options: { parent: menu.default } },
    { resource: require('../mongoose/category-model'), options: { parent: menu.default } },
    { resource: SequelizeDb.sequelize.models.User, options: { parent: menu.default } },
    { resource: SequelizeDb.sequelize.models.FavouritePlace, options: { parent: menu.default } },
    { resource: require('../mongoose/user-model'), options: { parent: menu.customized, ...user } },
    { resource: require('../mongoose/page-model'), options: { parent: menu.customized, ...page } },
    { resource: require('../mongoose/blog-post-model'), options: { parent: menu.customized, ...blogPost } },
    { resource: require('../mongoose/article-model'), options: { parent: menu.customized, ...article } },
  ],
  dashboard: DashboardPage,
}

