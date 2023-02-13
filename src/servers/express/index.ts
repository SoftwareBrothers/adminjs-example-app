import path from 'path';
import mongoose from 'mongoose';
import express, { Express } from 'express';
import cors from 'cors';
import AdminJS from 'adminjs';
import { ADMIN, createAdmin, generateAdminJSConfig } from '../../admin';
import { expressAuthenticatedRouter } from '../../admin/router';
import { init } from '../../sources/mikroorm/config';
import dataSource from '../../sources/typeorm/config';
import getHtml from '../../admin/views/get-html';
import Login from '../../admin/views/components/login';

const attachAdminJS = async (app: Express) => {
  const config = generateAdminJSConfig();
  const adminJS = new AdminJS(config);

  AdminJS.prototype.renderLogin = async function ({ action, errorMessage }) {
    return getHtml(adminJS, Login, {
      credentials: ADMIN,
      action: action ?? adminJS.options.loginPath,
      errorMessage,
    });
  };

  const adminRouter = expressAuthenticatedRouter(adminJS);

  app.use(adminJS.options.rootPath, adminRouter);
  app.get('/', (req, res) => res.redirect(adminJS.options.rootPath));
  app.use(express.static(path.join(__dirname, '../../../public')));

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
    console.log(`AdminJS is under http://localhost:${process.env.PORT}/admin`);
  });
};

start();
