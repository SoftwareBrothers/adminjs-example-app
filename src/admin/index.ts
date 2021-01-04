import AdminBro, {
  ActionRequest,
  ActionResponse,
  ActionContext,
} from 'admin-bro';
import AdminBroMongoose from '@admin-bro/mongoose';
import AdminBroSequelizejs from '@admin-bro/sequelize';

import mongooseModels from '../adapters/mongoose/models';
import sequelizeDb from '../adapters/sequelize/models';

import user from './resources/user';
import page from './resources/page';
import blogPost from './resources/blog-post';
import article from './resources/article';
import complicated from './resources/complicated';
import comment from './resources/comment';
import category from './resources/category';
import test from './resources/test';
import { sort, timestamps } from './resources/sort';

AdminBro.registerAdapter(AdminBroMongoose);
AdminBro.registerAdapter(AdminBroSequelizejs);

const menu = {
  mongoose: { name: 'mongooseResources', icon: 'SpineLabel' },
  sequelize: { name: 'sequelizeResources', icon: 'Sql' },
};

export default {
  resources: [
    {
      resource: mongooseModels.Comment,
      options: { parent: menu.mongoose, ...comment },
    },
    {
      resource: mongooseModels.Category,
      options: { parent: menu.mongoose, ...category },
    },
    {
      resource: mongooseModels.Complicated,
      options: { parent: menu.mongoose, ...complicated },
    },
    {
      resource: mongooseModels.User,
      options: { parent: menu.mongoose, ...user },
    },
    {
      resource: mongooseModels.Page,
      options: { parent: menu.mongoose, ...page },
    },
    {
      resource: mongooseModels.BlogPost,
      options: { parent: menu.mongoose, ...blogPost },
    },
    {
      resource: mongooseModels.Article,
      options: { parent: menu.mongoose, ...article },
    },
    { resource: mongooseModels.Thing, options: { parent: menu.mongoose } },
    {
      resource: sequelizeDb.sequelize.models.User,
      options: { parent: menu.sequelize, sort, properties: timestamps },
    },
    {
      resource: sequelizeDb.sequelize.models.FavouritePlace,
      options: { navigation: menu.sequelize, sort, properties: timestamps },
    },
    {
      resource: sequelizeDb.sequelize.models.UserProfile,
      options: { parent: menu.sequelize },
    },
    {
      resource: sequelizeDb.sequelize.models.Test,
      options: { parent: menu.sequelize, ...test },
    },
  ],
  version: {
    admin: true,
    app: '1.2.3-beta',
  },
  branding: {
    companyName: 'AdminBro demo page',
  },
  pages: {
    customPage: {
      label: 'Custom page',
      handler: async (
        _request: ActionRequest,
        _response: ActionResponse,
        _context: ActionContext,
      ) => ({
        text: 'I am fetched from the backend',
      }),
      component: AdminBro.bundle('./components/some-stats'),
    },
  },
  locale: {
    language: 'en',
    translations: {
      messages: {
        loginWelcome:
          'to the demo application made with AdminBro - the best admin framework for Node.js apps, based on React.',
      },
    },
  },
};
