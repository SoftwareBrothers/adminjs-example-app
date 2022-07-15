import path from 'path';
import mongoose from 'mongoose';
import express from 'express';
import AdminJS from 'adminjs';
import { createAdmin, generateAdminJSConfig } from '../admin';
import { expressAuthenticatedRouter } from '../admin/router';
import { init } from '../sources/mikroorm/config';
import dataSource from '../sources/typeorm/config';

const app = express();

const attachAdminJS = async () => {
  const config = generateAdminJSConfig();
  const adminJS = new AdminJS(config);
  const adminRouter = expressAuthenticatedRouter(adminJS);

  app.use(adminJS.options.rootPath, adminRouter);
  app.get('/', (req, res) => res.redirect(adminJS.options.rootPath));
  app.use(express.static(path.join(__dirname, '../../public')));

  await createAdmin();
};

app.listen(process.env.PORT, async () => {
  await mongoose.connect(process.env.MONGO_DATABASE_URL);
  await init();
  await dataSource.initialize();

  await attachAdminJS();

  console.log(`AdminJS is under localhost:${process.env.PORT}/admin`);
});
