// Adapters
import { Database as MikroormDatabase, Resource as MikroormResource } from '@adminjs/mikroorm';
import { Database as MongooseDatabase, Resource as MongooseResource } from '@adminjs/mongoose';
import { Database as ObjectionDatabase, Resource as ObjectionResource } from '@adminjs/objection';
import { Database as PrismaDatabase, Resource as PrismaResource } from '@adminjs/prisma';
import { Database as SequelizeDatabase, Resource as SequelizeResource } from '@adminjs/sequelize';
import { Database as TypeormDatabase, Resource as TypeormResource } from '@adminjs/typeorm';

import AdminJS, { AdminJSOptions, ResourceOptions } from 'adminjs';
import argon2 from 'argon2';
import { CreateCarResource, CreateOwnerResource, CreateSellerResource } from '../sources/mikroorm/resources/index.js';
import { AdminModel } from '../sources/mongoose/models/index.js';
import {
  CreateAdminResource,
  CreateArticleResource,
  CreateCategoryResource,
  CreateCommentResource,
  CreateComplicatedResource,
  CreateUserResource,
} from '../sources/mongoose/resources/index.js';
import { CreateManagerResource, CreateOfficeResource } from '../sources/objectionjs/resources/index.js';
import {
  CreatePostResource,
  CreateProfileResource,
  CreatePublisherResource,
} from '../sources/prisma/resources/index.js';
import { CryptoDatabase } from '../sources/rest/crypto-database.js';
import {
  CreateCartResource,
  CreateCategoryResource as CreateSequelizeCategoryResource,
  CreateOrderResource,
  CreateProductResource,
} from '../sources/sequelize/resources/index.js';
import { CreateOrganizationResource, CreatePersonResource } from '../sources/typeorm/resources/index.js';
import './components.bundler.js';
import { componentLoader } from './components.bundler.js';
import { locale } from './locale/index.js';
import pages from './pages/index.js';
import theme from './theme.js';

AdminJS.registerAdapter({ Database: MikroormDatabase, Resource: MikroormResource });
AdminJS.registerAdapter({ Database: MongooseDatabase, Resource: MongooseResource });
AdminJS.registerAdapter({ Database: ObjectionDatabase, Resource: ObjectionResource });
AdminJS.registerAdapter({ Database: PrismaDatabase, Resource: PrismaResource });
AdminJS.registerAdapter({ Database: SequelizeDatabase, Resource: SequelizeResource });
AdminJS.registerAdapter({ Database: TypeormDatabase, Resource: TypeormResource });

export const menu: Record<string, ResourceOptions['navigation']> = {
  mongoose: { name: 'Mongoose', icon: 'Folder' },
  sequelize: { name: 'Sequelize', icon: 'Folder' },
  typeorm: { name: 'Typeorm', icon: 'Folder' },
  mikroorm: { name: 'Mikroorm', icon: 'Folder' },
  prisma: { name: 'Prisma', icon: 'Folder' },
  objection: { name: 'Objection', icon: 'Folder' },
  rest: { name: 'REST', icon: 'Link' },
};

export const generateAdminJSConfig: () => AdminJSOptions = () => ({
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
  componentLoader,
  version: {
    admin: true,
    app: '2.0.0',
  },
  pages,
  resources: [
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
    // custom
    new CryptoDatabase(),
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
