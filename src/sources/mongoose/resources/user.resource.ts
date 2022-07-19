import { UserModel } from '../models';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { menu } from '../../../admin';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';

export const CreateUserResource = (): CreateResourceResult<typeof UserModel> => ({
  resource: UserModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    parent: menu.mongoose,
    properties: {
      _id: {
        isTitle: true,
      },
    },
  },
});
