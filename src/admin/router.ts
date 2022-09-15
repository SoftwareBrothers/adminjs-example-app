import ExpressPlugin, { AuthService } from '@adminjs/express';
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

  const authService = new AuthService({
    authenticate: authenticateUser,
    cookiePassword: 'secret',
    cookieName: 'adminjs',
    session: {
      store: sessionStore,
      saveUninitialized: true,
      resave: true,
      secret: process.env.SESSION_SECRET ?? 'sessionsecret',
      cookie: {
        httpOnly: process.env.NODE_ENV === 'production',
        secure: false,
      },
      name: 'adminjs',
    },
  });
  const { router: adminRouter } = new ExpressPlugin(adminJs, {
    authentication: {
      required: true,
      authService,
    },
  }).register();

  return adminRouter;
};

export const expressRouter = (adminJs: AdminJS) => {
  const { router: adminRouter } = new ExpressPlugin(adminJs).register();
  return adminRouter;
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
