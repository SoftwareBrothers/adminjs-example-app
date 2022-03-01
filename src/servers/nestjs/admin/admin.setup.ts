import { INestApplication } from '@nestjs/common';
import { generateAdminJSConfig } from '../../../admin';
import AdminJS from 'adminjs';
import { expressAuthenticatedRouter } from '../../../admin/router';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';

export const setupAdminJS = async (app: INestApplication): Promise<void> => {
  const expressApp: AbstractHttpAdapter = app.get(HttpAdapterHost).httpAdapter;
  const config = generateAdminJSConfig();
  const adminJS = new AdminJS(config);
  expressApp.use(adminJS.options.rootPath, expressAuthenticatedRouter(adminJS));
};
