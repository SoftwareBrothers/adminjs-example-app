import { ProductModel } from '../models';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';

export const CreateProductResource = (): CreateResourceResult<typeof ProductModel> => ({
  resource: ProductModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    properties: {
      price: {
        type: 'currency',
      },
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
