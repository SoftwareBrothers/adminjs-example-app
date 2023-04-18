import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import mongoose from 'mongoose';

import { AppModule } from './app.module.js';
import { setupAdminJS } from './admin/admin.setup.js';
import { init } from '../../sources/mikroorm/config.js';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  await mongoose.connect(process.env.MONGO_DATABASE_URL);
  await init();
  await setupAdminJS(app);

  await app.listen(process.env.PORT);
  console.log(`AdminJS is under http://localhost:${process.env.PORT}/admin`);
};

bootstrap();
