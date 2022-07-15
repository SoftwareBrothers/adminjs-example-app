import fastify from 'fastify';
import mongoose from 'mongoose';
import { createAdmin, generateAdminJSConfig } from '../admin';
import AdminJS from 'adminjs';
import { init } from '../sources/mikroorm/config';
import dataSource from '../sources/typeorm/config';
import { fastifyAuthenticatedRouter } from '../admin/router';
import fastifyStatic from 'fastify-static';
import path from 'path';

const app = fastify();

const attachAdminJS = async () => {
  const config = generateAdminJSConfig();
  const adminJS = new AdminJS(config);
  await fastifyAuthenticatedRouter(adminJS, app);
  await createAdmin();
};

const run = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_DATABASE_URL);
    await init();
    await dataSource.initialize();

    app.register(fastifyStatic, {
      root: path.join(__dirname, '../assets'),
      prefix: '/assets/',
    });

    await attachAdminJS();

    await app.listen(process.env.PORT);
    console.log(`AdminJS is under localhost:${process.env.PORT}/admin`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

run();
