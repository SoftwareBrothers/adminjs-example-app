import { DataTypes, Model, Optional, Association, HasOneGetAssociationMixin, NonAttribute } from 'sequelize';

import { sequelize } from '../index.js';
import { ProductModel } from './product.model.js';
import { OrderModel } from './order.model.js';

type Cart = {
  id: number;
  quantity: number;
  orderId: number;
  productId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type CartCreationAttributes = Optional<Cart, 'id'>;

export class CartModel extends Model<Cart, CartCreationAttributes> {
  declare id: number;
  declare quantity: number;
  declare createdAt: Date;
  declare updatedAt: Date;

  declare product?: NonAttribute<ProductModel>;
  declare order?: NonAttribute<OrderModel>;

  declare getProduct: HasOneGetAssociationMixin<ProductModel>;
  declare getOrder: HasOneGetAssociationMixin<OrderModel>;

  declare static associations: {
    product: Association<ProductModel>;
    order: Association<OrderModel>;
  };
}

CartModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id',
      },
      allowNull: false,
    },
    orderId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'orders',
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'cart_products',
    modelName: 'cart',
  },
);

CartModel.belongsTo(ProductModel, {
  targetKey: 'id',
  as: 'product',
  foreignKey: 'productId',
});

CartModel.belongsTo(OrderModel, {
  targetKey: 'id',
  as: 'order',
  foreignKey: 'orderId',
});
OrderModel.hasMany(CartModel, {
  sourceKey: 'id',
  as: 'carts',
  foreignKey: 'orderId',
});
