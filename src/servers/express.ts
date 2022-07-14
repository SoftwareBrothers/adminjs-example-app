import { createAdmin, generateAdminJSConfig } from '../admin';
import mongoose from 'mongoose';
import { expressAuthenticatedRouter } from '../admin/router';
import { init } from '../sources/mikroorm/config';
import dataSource from '../sources/typeorm/config';
import AdminJS from 'adminjs';

const express = require('express');
const app = express();

const attachAdminJS = async () => {
  const config = generateAdminJSConfig();
  const adminJS = new AdminJS(config);
  app.use(adminJS.options.rootPath, expressAuthenticatedRouter(adminJS));
  await createAdmin();
};

app.listen(process.env.PORT, async () => {
  await mongoose.connect(process.env.MONGO_DATABASE_URL);
  await init();
  await dataSource.initialize();

  await attachAdminJS();

  console.log(`AdminJS is under localhost:${process.env.PORT}/admin`);
});
