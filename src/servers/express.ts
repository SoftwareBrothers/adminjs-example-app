import path from 'path';
import mongoose from 'mongoose';
import AdminJS from 'adminjs';
import { expressAuthenticatedRouter } from '../admin/router';
import { init } from '../sources/mikroorm/config';
import { connection } from '../sources/typeorm/config';
import { createAdmin, generateAdminJSConfig } from '../admin';

const express = require('express');
const app = express();

const attachAdminJS = async () => {
  const config = generateAdminJSConfig();
  const adminJS = new AdminJS(config);
  app.use(adminJS.options.rootPath, expressAuthenticatedRouter(adminJS));
  await createAdmin();
};

app.listen(process.env.PORT, async () => {
  await mongoose.connect(process.env.MONGO_URL);
  await init();
  await connection;

  app.use(express.static(path.join(__dirname, '/../../public')));
  await attachAdminJS();

  console.log(`AdminJS is under localhost:${process.env.PORT}/admin`);
});
