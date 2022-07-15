import AdminJSExpress from '@adminjs/express';
import AdminJSFastify from '@adminjs/fastify';
import AdminJS from 'adminjs';
import argon2 from 'argon2';
import { FastifyInstance } from 'fastify';
import ConnectPgSimple from 'connect-pg-simple';
import session from 'express-session';

import { AdminModel } from '../sources/mongoose/models';

export const authenticateUser = async (email, password) => {
  const user = await AdminModel.findOne({ email });
  if (user && (await argon2.verify(user.password, password))) {
    return user;
  }
  return null;
};

export const expressAuthenticatedRouter = (adminJs: AdminJS) => {
  const ConnectSession = ConnectPgSimple(session);

  const sessionStore = new ConnectSession({
    conObject: {
      connectionString: process.env.POSTGRES_DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production',
    },
    tableName: 'session',
    createTableIfMissing: true,
  });

  return AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    {
      authenticate: authenticateUser,
      cookieName: 'adminjs',
      cookiePassword: process.env.SESSION_SECRET ?? 'sessionsecret',
    },
    null,
    {
      store: sessionStore,
      resave: true,
      saveUninitialized: true,
      secret: process.env.SESSION_SECRET ?? 'sessionsecret',
      cookie: {
        httpOnly: process.env.NODE_ENV === 'production',
        secure: process.env.NODE_ENV === 'production',
      },
      name: 'adminjs',
    }
  );
};

export const fastifyAuthenticatedRouter = (adminJs: AdminJS, app: FastifyInstance) =>
  AdminJSFastify.buildAuthenticatedRouter(
    adminJs,
    {
      cookiePassword: 'secretsecretsecretsecretsecretsecretsecretsecret',
      authenticate: authenticateUser,
    },
    app
  );
