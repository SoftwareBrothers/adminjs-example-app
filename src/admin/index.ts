import { Database as MikroormDatabse, Resource as MikroormResource } from '@adminjs/mikroorm';
import AdminJSMongoose from '@adminjs/mongoose';
import { Database as ObjectionDatabase, Resource as ObjectionResource } from '@adminjs/objection';
import { Database as PrismaDatabase, Resource as PrismaResource } from '@adminjs/prisma';
import AdminJSSequelize from '@adminjs/sequelize';
import { Database as TypeormDatabase, Resource as TypeormResource } from '@adminjs/typeorm';
import AdminJS from 'adminjs';
import argon2 from 'argon2';
import { CreateCarResource, CreateOwnerResource, CreateSellerResource } from '../sources/mikroorm/resources';
import { AdminModel } from '../sources/mongoose/models';
import {
  CreateAdminResource,
  CreateArticleResource,
  CreateCategoryResource,
  CreateCommentResource,
  CreateComplicatedResource,
  CreateUserResource,
} from '../sources/mongoose/resources';
import { CreateManagerResource, CreateOfficeResource } from '../sources/objectionjs/resources';
import { CreatePostResource, CreateProfileResource, CreatePublisherResource } from '../sources/prisma/resources';
import { CryptoDatabase } from '../sources/rest/crypto-database';
import {
  CreateCartResource,
  CreateOrderResource,
  CreateProductResource,
  CreateCategoryResource as CreateSequelizeCategoryResource,
} from '../sources/sequelize/resources';
import { CreateOrganizationResource, CreatePersonResource } from '../sources/typeorm/resources';
import {
  BLOG_PAGE,
  BUTTONS_PAGE,
  FORMS_PAGE,
  ICONS_PAGE,
  ILLUSTRATIONS_PAGE,
  MODAL_PAGE,
  SOME_STATS,
  TYPOGRAPHY_PAGE,
} from './components.bundler';
import locale from './locale';
import theme from './theme';

AdminJS.registerAdapter(AdminJSMongoose);
AdminJS.registerAdapter(AdminJSSequelize);
AdminJS.registerAdapter({
  Database: TypeormDatabase,
  Resource: TypeormResource,
});
AdminJS.registerAdapter({
  Database: MikroormDatabse,
  Resource: MikroormResource,
});
AdminJS.registerAdapter({
  Database: PrismaDatabase,
  Resource: PrismaResource,
});
AdminJS.registerAdapter({
  Database: ObjectionDatabase,
  Resource: ObjectionResource,
});

export const menu = {
  rest: { name: 'REST', icon: 'Link' },
  mongoose: { name: 'Mongoose Resources', icon: 'Database' },
  sequelize: { name: 'Sequelize Resources', icon: 'Database' },
  typeorm: { name: 'Typeorm Resources', icon: 'Database' },
  mikroorm: { name: 'Mikroorm Resources', icon: 'Database' },
  prisma: { name: 'Prisma Resources', icon: 'Database' },
  objection: { name: 'Objection Resources', icon: 'Database' },
};

export const generateAdminJSConfig = () => ({
  locale,
  assets: {
    styles: ['/custom.css'],
    scripts: process.env.NODE_ENV === 'production' ? ['/gtm.js'] : [],
  },
  rootPath: '/admin',
  branding: {
    companyName: 'AdminJS demo page',
    favicon: '/favicon.ico',
    theme,
  },
  version: {
    admin: true,
    app: '2.0.0',
  },
  resources: [
    // custom
    new CryptoDatabase(),
    // mongo
    CreateAdminResource(),
    CreateUserResource(),
    CreateCategoryResource(),
    CreateArticleResource(),
    CreateCommentResource(),
    CreateComplicatedResource(),
    // sequelize
    CreateSequelizeCategoryResource(),
    CreateProductResource(),
    CreateOrderResource(),
    CreateCartResource(),
    // typeorm
    CreateOrganizationResource(),
    CreatePersonResource(),
    // mikroorm
    CreateCarResource(),
    CreateSellerResource(),
    CreateOwnerResource(),
    // prisma
    CreatePublisherResource(),
    CreateProfileResource(),
    CreatePostResource(),
    // objectionjs
    CreateOfficeResource(),
    CreateManagerResource(),
  ],
  pages: {
    'Custom Page': {
      component: SOME_STATS,
      icon: 'Layers',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handler: async (request, response, context) => {
        return {
          text: 'I am fetched from the backend',
        };
      },
    },
    'Design system - Blog': { component: BLOG_PAGE },
    'Design system - Buttons': { component: BUTTONS_PAGE },
    'Design system - Form': { component: FORMS_PAGE },
    'Design system - Icons': { component: ICONS_PAGE },
    'Design system - Illustrations': { component: ILLUSTRATIONS_PAGE },
    'Design system - Modal': { component: MODAL_PAGE },
    'Design system - Typography': { component: TYPOGRAPHY_PAGE },
  },
});

export const ADMIN = {
  email: 'admin@example.com',
  password: 'password',
  title: 'Admin'
};

export const createAdmin = async () => {
  const admin = await AdminModel.findOne({ email: ADMIN.email });
  if (!admin) {
    await AdminModel.create({
      email: ADMIN.email,
      password: await argon2.hash(ADMIN.password)
    });
  }
};
