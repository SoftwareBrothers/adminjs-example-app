import { DataTypes, Model, Optional, Association, NonAttribute, HasManyGetAssociationsMixin } from 'sequelize';

import { sequelize } from '../index.js';
import { CartModel } from './cart.model.js';

type Order = {
  id: number;
  isPaid: boolean;
  delivery: string;
  createdAt: Date;
  updatedAt: Date;
};

export type OrderCreationAttributes = Optional<Order, 'id'>;

export class OrderModel extends Model<Order, OrderCreationAttributes> {
  declare id: number;
  declare isPaid: boolean;
  declare delivery: string;
  declare createdAt: Date;
  declare updatedAt: Date;

  declare carts?: NonAttribute<CartModel[]>;

  declare getCarts: HasManyGetAssociationsMixin<CartModel>;

  declare static associations: {
    carts: Association<CartModel>;
  };
}

OrderModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    isPaid: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    delivery: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
  },
  {
    sequelize,
    tableName: 'orders',
    modelName: 'order',
  },
);
