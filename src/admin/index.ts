import { Database as MikroormDatabse, Resource as MikroormResource } from '@adminjs/mikroorm';
import AdminJSMongoose from '@adminjs/mongoose';
import { Database as ObjectionDatabase, Resource as ObjectionResource } from '@adminjs/objection';
import { Database as PrismaDatabase, Resource as PrismaResource } from '@adminjs/prisma';
import AdminJSSequelize from '@adminjs/sequelize';
import { Database as TypeormDatabase, Resource as TypeormResource } from '@adminjs/typeorm';
import AdminJS, { AdminJSOptions } from 'adminjs';
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
import locale from './locale';
import pages from './pages';
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
  mongoose: { name: 'Mongoose Resources', icon: 'HardDrive' },
  sequelize: { name: 'Sequelize Resources', icon: 'HardDrive' },
  typeorm: { name: 'Typeorm Resources', icon: 'HardDrive' },
  mikroorm: { name: 'Mikroorm Resources', icon: 'HardDrive' },
  prisma: { name: 'Prisma Resources', icon: 'HardDrive' },
  objection: { name: 'Objection Resources', icon: 'HardDrive' },
  rest: { name: 'REST', icon: 'Link' },
};

export const generateAdminJSConfig: () => AdminJSOptions = () => ({
  locale: {
    ...locale,
    availableLanguages: ['en', 'de', 'it', 'pl', 'pt-br', 'ua', 'zh-cn'],
  },
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
  availableThemes: [],
  defaultTheme: 'light',
  version: {
    admin: true,
    app: '2.0.0',
  },
  pages,
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
});

export const ADMIN = {
  email: 'admin@example.com',
  password: 'password',
  title: 'Admin',
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
