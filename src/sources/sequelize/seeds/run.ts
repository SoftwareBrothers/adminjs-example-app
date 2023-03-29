import dotenv from 'dotenv';
dotenv.config({
  path: `${process.cwd()}/.env`,
});

import flatten from 'lodash/flatten.js';
import { CategoryModel, CartModel, ProductModel, OrderModel } from '../models/index.js';
import { categories, carts, products, orders } from './data/index.js';

const categoriesCount = 2;
const productsPerCategory = 2;
const cartsPerProduct = 1;

const run = async () => {
  const createdCategories = await CategoryModel.bulkCreate(categories(categoriesCount));
  const createdProducts = flatten(
    await Promise.all(
      createdCategories.map((cat) =>
        ProductModel.bulkCreate(products(productsPerCategory, { categoryId: cat.get('id') })),
      ),
    ),
  );
  // TODO: Look into Order/Cart relationship, it's a bit odd...
  const createdOrder = await OrderModel.create(orders(1)[0]);
  await Promise.all(
    createdProducts.map((p) =>
      CartModel.bulkCreate(carts(cartsPerProduct, { orderId: createdOrder.get('id'), productId: p.get('id') })),
    ),
  );
};

run()
  .then(() => process.exit(0))
  .catch((e) => {
    console.log(e);
    process.exit(1);
  });
