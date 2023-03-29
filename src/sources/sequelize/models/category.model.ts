import { DataTypes, Model, Optional } from 'sequelize';

import { sequelize } from '../index.js';

type Category = {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type CategoryCreationAttributes = Optional<Category, 'id'>;

export class CategoryModel extends Model<Category, CategoryCreationAttributes> {
  declare id: number;
  declare name: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

CategoryModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
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
    tableName: 'categories',
    modelName: 'category',
  },
);
