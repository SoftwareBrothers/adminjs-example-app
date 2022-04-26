import mongoose from 'mongoose';
import AdminJS from 'adminjs';
import cors from 'cors';
import { expressAuthenticatedRouter } from '../admin/router';
import { init } from '../sources/mikroorm/config';
import { connection } from '../sources/typeorm/config';
import { createAdmin, generateAdminJSConfig } from '../admin';

const express = require('express');
const app = express();
app.use(cors());

const attachAdminJS = async () => {
  const config = generateAdminJSConfig();
  const adminJS = new AdminJS(config);
  const adminRouter = expressAuthenticatedRouter(adminJS);
  app.use(adminJS.options.rootPath, adminRouter);

  await createAdmin();
};

app.listen(process.env.PORT, async () => {
  await mongoose.connect(process.env.MONGO_URL);
  await init();
  await connection;

  await attachAdminJS();

  console.log(`AdminJS is under localhost:${process.env.PORT}/admin`);
});
