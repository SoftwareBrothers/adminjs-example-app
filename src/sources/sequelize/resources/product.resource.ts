import { menu } from '../../../admin/index.js';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions.js';
import { ResourceFunction } from '../../../admin/types/index.js';
import { ProductModel } from '../models/index.js';

export const CreateProductResource: ResourceFunction<typeof ProductModel> = () => ({
  resource: ProductModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    navigation: menu.sequelize,
    properties: {
      price: {
        type: 'currency',
        props: {
          decimalSeparator: '.',
          disableGroupSeparators: true,
          prefix: '$',
          fixedDecimalLength: 2,
        },
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
