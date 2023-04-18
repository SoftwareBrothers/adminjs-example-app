import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { CategoryModel } from '../models/index.js';

export const CreateCategoryResource: ResourceFunction<typeof CategoryModel> = () => ({
  resource: CategoryModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.sequelize,
    properties: {
      name: {
        isTitle: true,
      },
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
