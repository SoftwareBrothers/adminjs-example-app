import { DataTypes, Model, Optional, Association, HasOneGetAssociationMixin, NonAttribute } from 'sequelize';

import { sequelize } from '../index.js';
import { CategoryModel } from './category.model.js';

type Product = {
  id: number;
  name: string;
  price: number;
  categoryId: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ProductCreationAttributes = Optional<Product, 'id'>;

export class ProductModel extends Model<Product, ProductCreationAttributes> {
  declare id: number;
  declare name: string;
  declare price: string;
  declare categoryId: number;
  declare createdAt: Date;
  declare updatedAt: Date;

  declare category?: NonAttribute<CategoryModel>;

  declare getCategory: HasOneGetAssociationMixin<CategoryModel>;

  declare static associations: {
    category: Association<CategoryModel>;
  };
}

ProductModel.init(
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
    price: {
      type: new DataTypes.DECIMAL(15, 6),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'categories',
        key: 'id',
      },
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'products',
    modelName: 'product',
  },
);

ProductModel.belongsTo(CategoryModel, {
  foreignKey: 'categoryId',
  targetKey: 'id',
  as: 'category',
});
CategoryModel.hasMany(ProductModel, { sourceKey: 'id' });
