import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { setupAdminJS } from './admin/admin.setup';
import mongoose from 'mongoose';
import { init } from '../../sources/mikroorm/config';

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    })
  );

  await mongoose.connect(process.env.MONGO_DATABASE_URL);
  await init();
  await setupAdminJS(app);

  await app.listen(process.env.PORT);
  console.log(`AdminJS is under localhost:${process.env.PORT}/admin`);
};

bootstrap();
