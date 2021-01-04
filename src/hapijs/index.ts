/* eslint-disable no-console */
import Hapi from '@admin-bro/hapi';
import mongoose from 'mongoose';

import AdminBroOptions from '../admin';

const ADMIN = {
  password: 'password',
  email: 'admin@example.com',
};

const start = async () => {
  try {
    const server = Hapi.server({
      port: process.env.PORT || 8080,
    });

    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });

    await server.register({
      plugin: Hapi,
      options: {
        ...AdminBroOptions,
        auth: {
          authenticate: async (email: string, password: string) => {
            if (ADMIN.password === password && email === ADMIN.email) {
              return {
                title: 'Administrator',
                ...ADMIN,
              };
            }
            return null;
          },
          strategy: 'session',
          cookieName: 'admin-bro-cookie',
          cookiePassword:
            process.env.COOKIE_PASSWORD ||
            'makesurepasswordissecuremakesurepasswordissecure',
          isSecure: false,
          defaultMessage: 'Login: test@example.com, Password: password',
        },
      },
    });

    await server.start();
    console.log('Server running at:', server.info.uri);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
