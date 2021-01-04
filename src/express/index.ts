/* eslint-disable no-console */
import mongoose from 'mongoose';
import express from 'express';
import AdminBro from 'admin-bro';
import Express from '@admin-bro/express';

import AdminBroOptions from '../admin';

const app = express();

const adminBro = new AdminBro(AdminBroOptions);

const ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

// const router = AdminBroExpress.buildRouter(adminBro)
const router = Express.buildAuthenticatedRouter(adminBro, {
  authenticate: async (email: string, password: string) => {
    if (ADMIN.password === password && ADMIN.email === email) {
      return ADMIN;
    }
    return null;
  },
  cookieName: 'adminbro',
  cookiePassword: 'somepassword',
});

app.use(adminBro.options.rootPath, router);

const run = async () => {
  await mongoose.connect(process.env.MONGO_URL);

  app.listen(8080, () =>
    console.log('AdminBro is available under localhost:8080/admin'),
  );
};

run();
