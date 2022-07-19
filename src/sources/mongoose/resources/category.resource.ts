import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { menu } from '../../../admin';
import { CategoryModel } from '../models';

export const CreateCategoryResource = (): CreateResourceResult<typeof CategoryModel> => ({
  resource: CategoryModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    parent: menu.mongoose,
    actions: {
      show: {
        showInDrawer: true,
      },
      edit: {
        showInDrawer: true,
      },
      new: {
        showInDrawer: true,
      },
    },
    properties: {
      _id: {
        isTitle: true,
      },
    },
  },
});
