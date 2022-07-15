import path from 'path';
import mongoose from 'mongoose';
import express, { Express } from 'express';
import cors from 'cors';
import AdminJS from 'adminjs';
import { createAdmin, generateAdminJSConfig } from '../admin';
import { expressAuthenticatedRouter } from '../admin/router';
import { init } from '../sources/mikroorm/config';
import dataSource from '../sources/typeorm/config';

const attachAdminJS = async (app: Express) => {
  const config = generateAdminJSConfig();
  const adminJS = new AdminJS(config);
  const adminRouter = expressAuthenticatedRouter(adminJS);

  app.use(adminJS.options.rootPath, adminRouter);
  app.get('/', (req, res) => res.redirect(adminJS.options.rootPath));
  app.use(express.static(path.join(__dirname, '../../public')));

  await createAdmin();
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
    console.log(`AdminJS is under localhost:${process.env.PORT}/admin`);
  });
};

start();
