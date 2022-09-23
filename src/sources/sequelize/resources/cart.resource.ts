import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { CartModel } from '../models';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';

export const CreateCartResource = (): CreateResourceResult<typeof CartModel> => ({
  resource: CartModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    properties: {
      createdAt: {
        isVisible: {
          show: true,
          edit: false,
        },
      },
      updatedAt: {
        isVisible: {
          show: true,
          edit: false,
        },
      },
    },
  },
});
