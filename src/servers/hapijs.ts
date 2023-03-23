import { init } from '../sources/mikroorm/config.js';
import dataSource from '../sources/typeorm/config.js';
import { generateAdminJSConfig } from '../admin/index.js';
import { expressAuthenticatedRouter } from '../admin/router.js';
import AdminJS from 'adminjs';

import Hapi, { ServerRegisterPluginObjectDirect } from '@hapi/hapi';
import mongoose from 'mongoose';
import AdminJSPlugin from '@adminjs/hapi';

const start = async () => {
  try {
    const server = Hapi.server({
      port: process.env.PORT || 3000,
    });

    await mongoose.connect(process.env.MONGO_DATABASE_URL);
    await init();
    await dataSource.initialize();

    const adminJS = generateAdminJSConfig();

    await server.register({
      plugin: AdminJSPlugin,
      options: {
        ...adminJS,
        auth: expressAuthenticatedRouter(new AdminJS(adminJS)),
      },
    } as ServerRegisterPluginObjectDirect<any, any>);

    await server.start();
    console.log(`AdminJS is under http://localhost:${process.env.PORT}/admin`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
