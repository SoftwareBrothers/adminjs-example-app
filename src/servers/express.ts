import path from 'path';
import mongoose from 'mongoose';
import AdminJS from 'adminjs';
import { createAdmin, generateAdminJSConfig } from '../admin';
import { expressAuthenticatedRouter } from '../admin/router';
import { init } from '../sources/mikroorm/config';
import { connection } from '../sources/typeorm/config';

const express = require('express');
const app = express();

const attachAdminJS = async () => {
  const config = generateAdminJSConfig();
  const adminJS = new AdminJS(config);
  app.use(adminJS.options.rootPath, expressAuthenticatedRouter(adminJS));
  app.use(express.static(path.join(__dirname, '../assets')));
  await createAdmin();
};

app.listen(process.env.PORT, async () => {
  await mongoose.connect(process.env.MONGO_URL);
  await init();
  await connection;

  await attachAdminJS();

  console.log(`AdminJS is under localhost:${process.env.PORT}/admin`);
});
