import AdminJSExpress from '@adminjs/express';
import AdminJSFastify from '@adminjs/fastify';
import AdminJS from 'adminjs';
import argon2 from 'argon2';
import { FastifyInstance } from 'fastify';

import { AdminModel } from '../sources/mongoose/models';

export const authenticateUser = async (email, password) => {
  const user = await AdminModel.findOne({ email });
  if (user && (await argon2.verify(user.password, password))) {
    return user;
  }
  return null;
};

export const expressAuthenticatedRouter = (adminJs: AdminJS) =>
  AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    {
      authenticate: authenticateUser,
      cookieName: 'adminjs',
      cookiePassword: 'somepassword',
    },
    null,
    {
      resave: false,
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET ?? 'sessionsecret',
    }
  );

export const fastifyAuthenticatedRouter = (adminJs: AdminJS, app: FastifyInstance) =>
  AdminJSFastify.buildAuthenticatedRouter(
    adminJs,
    {
      cookiePassword: 'secretsecretsecretsecretsecretsecretsecretsecret',
      authenticate: authenticateUser,
    },
    app
  );
