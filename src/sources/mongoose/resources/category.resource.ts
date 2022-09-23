import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { CategoryModel } from '../models';

export const CreateCategoryResource = (): CreateResourceResult<typeof CategoryModel> => ({
  resource: CategoryModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    properties: {
      _id: {
        isTitle: true,
      },
    },
  },
});
