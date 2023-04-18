import passwordsFeature from '@adminjs/passwords';
import argon2 from 'argon2';

import { componentLoader } from '../../../admin/components.bundler.js';
import { menu } from '../../../admin/index.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { AdminModel } from '../models/index.js';

export const CreateAdminResource: ResourceFunction<typeof AdminModel> = () => ({
  resource: AdminModel,
  features: [
    (options): object => ({
      ...options,
      listProperties: ['_id', 'email'],
      showProperties: ['_id', 'email'],
      editProperties: ['email', 'newPassword'],
    }),
    passwordsFeature({
      properties: {
        password: 'newPassword',
        encryptedPassword: 'password',
      },
      hash: argon2.hash,
      componentLoader,
    }),
  ],
  options: {
    navigation: menu.mongoose,
    sort: {
      direction: 'asc',
      sortBy: 'email',
    },
    actions: {
      delete: { isAccessible: false },
      bulkDelete: { isAccessible: false },
      edit: { isAccessible: false },
      new: { isAccessible: false },
    },
  },
});
