import fastify from 'fastify';
import mongoose from 'mongoose';
import AdminJS from 'adminjs';
import fastifyStatic from 'fastify-static';
import path from 'path';
import * as url from 'url';

import { createAuthUsers, generateAdminJSConfig } from '../admin/index.js';
import { init } from '../sources/mikroorm/config.js';
import dataSource from '../sources/typeorm/config.js';
import { fastifyAuthenticatedRouter } from '../admin/router.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const app = fastify();

const attachAdminJS = async () => {
  const config = generateAdminJSConfig();
  const adminJS = new AdminJS(config);
  await fastifyAuthenticatedRouter(adminJS, app);
  await createAuthUsers();
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
    console.log(`AdminJS is under http://localhost:${process.env.PORT}/admin`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

run();
