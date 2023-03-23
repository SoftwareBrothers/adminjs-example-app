import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { CartModel } from '../models/index.js';

export const CreateCartResource: ResourceFunction<typeof CartModel> = () => ({
  resource: CartModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.sequelize,
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
