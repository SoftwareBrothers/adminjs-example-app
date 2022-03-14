import path from 'path';
import { INestApplication } from '@nestjs/common';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';
import express from 'express';
import AdminJS from 'adminjs';
import { generateAdminJSConfig } from '../../../admin';
import { expressAuthenticatedRouter } from '../../../admin/router';

export const setupAdminJS = async (app: INestApplication): Promise<void> => {
  const expressApp: AbstractHttpAdapter = app.get(HttpAdapterHost).httpAdapter;
  const config = generateAdminJSConfig();
  const adminJS = new AdminJS(config);
  expressApp.use(adminJS.options.rootPath, expressAuthenticatedRouter(adminJS));
  expressApp.use(express.static(path.join(__dirname, '../../assets')));
};
