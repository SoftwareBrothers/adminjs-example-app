import AdminJSPlugin from '@adminjs/hapi';
import Hapi from '@hapi/hapi';
import AdminJS from 'adminjs';
import mongoose from 'mongoose';
import { generateAdminJSConfig } from '../admin';
import { expressAuthenticatedRouter } from '../admin/router';
import { init } from '../sources/mikroorm/config';
import { connection } from '../sources/typeorm/config';

const start = async () => {
  try {
    const server = Hapi.server({
      port: process.env.PORT || 3000,
    });

    await mongoose.connect(process.env.MONGO_URL);
    await init();
    await connection;

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
