import { CategoryModel } from '../models';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';

export const CreateCategoryResource = (): CreateResourceResult<typeof CategoryModel> => ({
  resource: CategoryModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
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
