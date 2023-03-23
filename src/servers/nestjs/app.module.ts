import { Module } from '@nestjs/common';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaService } from './prisma/prisma.service.js';
import { params } from '../../sources/typeorm/config.js';
import { MongooseSchemasModule } from './mongoose/mongoose.module.js';
import config from '../../sources/mikroorm/config.js';
import { databaseProviders } from './database.providers.js';

@Module({
  imports: [MikroOrmModule.forRoot(config), TypeOrmModule.forRoot(params), MongooseSchemasModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, ...databaseProviders],
})
export class AppModule {}
