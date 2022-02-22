import { init } from '../sources/mikroorm/config';
import { connection } from '../sources/typeorm/config';
import { generateAdminJSConfig } from '../admin';
import { router } from '../admin/router';
import AdminJS from 'adminjs';

const Hapi = require('@hapi/hapi');
const mongoose = require('mongoose');
const AdminJSPlugin = require('@adminjs/hapi');

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
        auth: router(new AdminJS(adminJS)),
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
