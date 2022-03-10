import AdminJS from 'adminjs';
import AdminJSMongoose from '@adminjs/mongoose';
import AdminJSSequelize from '@adminjs/sequelize';
import { Database as MikroormDatabse, Resource as MikroormResource } from '@adminjs/mikroorm';
import { Database as TypeormDatabase, Resource as TypeormResource } from '@adminjs/typeorm';
import { Database as PrismaDatabase, Resource as PrismaResource } from '@adminjs/prisma';
import argon2 from 'argon2';
import locale from './locale';
import theme from './theme';
import { AdminModel } from '../sources/mongoose/models';
import {
  CreateAdminResource,
  CreateArticleResource,
  CreateCategoryResource,
  CreateCommentResource,
  CreateComplicatedResource,
  CreateUserResource,
} from '../sources/mongoose/resources';
import {
  CreateProductResource,
  CreateCategoryResource as CreateSequelizeCategoryResource,
  CreateCartResource,
  CreateOrderResource,
} from '../sources/sequelize/resources';
import { CreateOrganizationResource, CreatePersonResource } from '../sources/typeorm/resources';
import { CreateOwnerResource, CreateSellerResource, CreateCarResource } from '../sources/mikroorm/resources';
import { CreatePostResource, CreatePublisherResource, CreateProfileResource } from '../sources/prisma/resources';
import { SOME_STATS } from './components.bundler';
import { CryptoDatabase } from '../sources/rest/crypto-database';

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

export const menu = {
  rest: { name: 'REST', icon: 'Purchase' },
  mongoose: { name: 'Mongoose Resources', icon: 'Tree' },
  sequelize: { name: 'Sequelize Resources', icon: 'Sql' },
  typeorm: { name: 'Typeorm Resources', icon: 'NoodleBowl' },
  mikroorm: { name: 'Mikroorm Resources', icon: 'Bee' },
  prisma: { name: 'Prisma Resources', icon: 'Industry' },
};

export const generateAdminJSConfig = () => ({
  locale,
  rootPath: '/admin',
  branding: {
    companyName: 'AdminJS demo page',
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
  ],
  pages: {
    'Custom Page': {
      component: SOME_STATS,
      icon: 'Purchase',
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      handler: async (request, response, context) => {
        return {
          text: 'I am fetched from the backend',
        };
      },
    },
  },
});

const ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

export const createAdmin = async () => {
  const admin = await AdminModel.findOne({ email: ADMIN.email });
  if (!admin) {
    await AdminModel.create({
      email: ADMIN.email,
      password: await argon2.hash(ADMIN.password),
    });
  }
};
