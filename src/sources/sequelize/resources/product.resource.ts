import { menu } from '../../../admin';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';
import { ResourceFunction } from '../../../admin/types';
import { ProductModel } from '../models';

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
