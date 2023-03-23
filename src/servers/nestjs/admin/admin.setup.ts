import { INestApplication } from '@nestjs/common';
import AdminJS from 'adminjs';
import { AbstractHttpAdapter, HttpAdapterHost } from '@nestjs/core';

import { generateAdminJSConfig } from '../../../admin/index.js';
import { expressAuthenticatedRouter } from '../../../admin/router.js';

export const setupAdminJS = async (app: INestApplication): Promise<void> => {
  const expressApp: AbstractHttpAdapter = app.get(HttpAdapterHost).httpAdapter;
  const config = generateAdminJSConfig();
  const adminJS = new AdminJS(config);
  expressApp.use(adminJS.options.rootPath, expressAuthenticatedRouter(adminJS));
};
