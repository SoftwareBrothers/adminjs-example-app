import { ProductModel } from '../models';
import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { menu } from '../../../admin';

export const CreateProductResource = (): CreateResourceResult<typeof ProductModel> => ({
  resource: ProductModel,
  options: {
    parent: menu.sequelize,
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
