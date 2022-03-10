import AdminJSExpress from '@adminjs/express';
import AdminJSFastify from '@adminjs/fastify';
import AdminJS from 'adminjs';
import { AdminModel } from '../sources/mongoose/models';
import argon2 from 'argon2';
import { FastifyInstance } from 'fastify';

export const authenticateUser = async (email, password) => {
  const user = await AdminModel.findOne({ email });
  if (user && (await argon2.verify(user.password, password))) {
    return user;
  }
  return null;
};

export const expressAuthenticatedRouter = (adminJs: AdminJS) =>
  AdminJSExpress.buildAuthenticatedRouter(adminJs, {
    authenticate: authenticateUser,
    cookieName: 'adminjs',
    cookiePassword: 'somepassword',
  });

export const fastifyAuthenticatedRouter = (adminJs: AdminJS, app: FastifyInstance) =>
  AdminJSFastify.buildAuthenticatedRouter(
    adminJs,
    {
      cookiePassword: 'secretsecretsecretsecretsecretsecretsecretsecret',
      authenticate: authenticateUser,
    },
    app
  );
