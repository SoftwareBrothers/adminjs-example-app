import { CartModel, OrderModel, ProductModel } from '../models/index.js';

export const getSum = async (id: number): Promise<number> => {
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

  return (
    order.carts.reduce((curr, next) => {
      const price = parseInt(next.product.price, 10) * next.quantity;
      return curr + price;
    }, 0) / 100
  );
};
