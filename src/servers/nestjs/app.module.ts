import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { params } from '../../sources/typeorm/config';
import { MongooseSchemasModule } from './mongoose/mongoose.module';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import config from '../../sources/mikroorm/config';
import { databaseProviders } from './database.providers';

@Module({
  imports: [MikroOrmModule.forRoot(config), TypeOrmModule.forRoot(params), MongooseSchemasModule],
  controllers: [AppController],
  providers: [AppService, PrismaService, ...databaseProviders],
})
export class AppModule {}
