import { UserModel } from '../models';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';

export const CreateUserResource = (): CreateResourceResult<typeof UserModel> => ({
  resource: UserModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    properties: {
      _id: {
        isTitle: true,
      },
    },
  },
});
