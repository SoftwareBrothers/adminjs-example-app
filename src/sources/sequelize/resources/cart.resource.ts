import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { menu } from '../../../admin';
import { CartModel } from '../models';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';

export const CreateCartResource = (): CreateResourceResult<typeof CartModel> => ({
  resource: CartModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    parent: menu.sequelize,
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
