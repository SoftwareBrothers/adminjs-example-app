import { ActionRequest, ActionResponse, After, flat } from 'adminjs';

import { isGETMethod } from '../../../admin/admin.utils.js';
import { CartModel, OrderModel, ProductModel } from '../models/index.js';
import { ProductListInterface } from '../interfaces.js';

export const getProducts =
  (): After<ActionResponse> =>
  async (response: ActionResponse, request: ActionRequest): Promise<ActionResponse> => {
    if (!isGETMethod(request)) {
      return response;
    }

    const id = parseInt(request.params.recordId, 10);

    const order = await OrderModel.findByPk(id, {
      include: [
        {
          model: CartModel,
          as: 'carts',
          include: [
            {
              model: ProductModel,
              as: 'product',
            },
          ],
        },
      ],
    });

    const params = flat.unflatten<any, ProductListInterface>(response.record.params);
    params.products = order.carts?.map((cart) => ({
      quantity: cart.quantity,
      product: {
        id: cart.product?.id,
        name: cart.product?.name,
        price: parseFloat(cart.product?.price),
      },
    }));

    response.record.params = flat.flatten(params);

    return response;
  };
