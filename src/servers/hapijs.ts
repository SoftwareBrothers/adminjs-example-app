import { init } from '../sources/mikroorm/config';
import dataSource from '../sources/typeorm/config';
import { generateAdminJSConfig } from '../admin';
import { expressAuthenticatedRouter } from '../admin/router';
import AdminJS from 'adminjs';

import Hapi from '@hapi/hapi';
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
    });

    await server.start();
    console.log(`AdminJS is under localhost:${process.env.PORT}/admin`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
