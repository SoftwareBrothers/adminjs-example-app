import { UserModel } from '../models';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { menu } from '../../../admin';

export const CreateUserResource = (): CreateResourceResult<typeof UserModel> => ({
  resource: UserModel,
  options: {
    parent: menu.mongoose,
    properties: {
      _id: {
        isTitle: true,
      },
      aboutRich: {
        type: 'richtext',
      },
    },
  },
});
