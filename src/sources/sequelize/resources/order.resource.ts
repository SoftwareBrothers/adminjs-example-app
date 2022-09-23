import { CreateResourceResult } from '../../../admin/create-resource-result.type';
import { OrderModel } from '../models';
import { getProducts } from '../hooks/get-products.hook';
import { getSumForOrder } from '../hooks/get-sum.hook';
import { useEnvironmentVariableToDisableActions } from '../../../admin/features/useEnvironmentVariableToDisableActions';

export const CreateOrderResource = (): CreateResourceResult<typeof OrderModel> => ({
  resource: OrderModel,
  features: [useEnvironmentVariableToDisableActions()],
  options: {
    actions: {
      list: {
        after: [getSumForOrder()],
      },
      show: {
        after: [getProducts(), getSumForOrder()],
      },
    },
    properties: {
      sum: {
        isVisible: {
          edit: false,
          list: true,
          filter: false,
          show: true,
        },
        position: 998,
      },
      productsList: {
        isVisible: {
          edit: false,
          list: false,
          filter: false,
          show: true,
        },
        position: 999,
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
