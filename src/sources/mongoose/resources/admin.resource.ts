import { AdminModel } from '../models';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { menu } from '../../../admin';
import passwordsFeature from '@adminjs/passwords';
import argon2 from 'argon2';

export const CreateAdminResource = (): CreateResourceResult<typeof AdminModel> => ({
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
    }),
  ],
  options: {
    parent: menu.mongoose,
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
