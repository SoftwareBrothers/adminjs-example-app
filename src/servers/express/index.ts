import path from 'path';
import mongoose from 'mongoose';
import express, { Express } from 'express';
import cors from 'cors';
import AdminJS from 'adminjs';
import * as url from 'url';

import { createAuthUsers, generateAdminJSConfig } from '../../admin/index.js';
import { expressAuthenticatedRouter } from '../../admin/router.js';
import { init } from '../../sources/mikroorm/config.js';
import dataSource from '../../sources/typeorm/config.js';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const attachAdminJS = async (app: Express) => {
  const config = generateAdminJSConfig();
  const adminJS = new AdminJS(config);

  if (process.env.NODE_ENV === 'production') await adminJS.initialize();
  else adminJS.watch();

  const adminRouter = expressAuthenticatedRouter(adminJS);

  app.use(adminJS.options.rootPath, adminRouter);
  app.get('/', (req, res) => res.redirect(adminJS.options.rootPath));
  app.use(express.static(path.join(__dirname, '../../../public')));

  await createAuthUsers();
};

const start = async () => {
  const app = express();
  app.enable('trust proxy');
  app.use(cors({ credentials: true, origin: true }));

  await mongoose.connect(process.env.MONGO_DATABASE_URL);
  await init();
  await dataSource.initialize();

  await attachAdminJS(app);

  app.listen(process.env.PORT, async () => {
    console.log(`AdminJS is under http://localhost:${process.env.PORT}`);
  });
};

start();
