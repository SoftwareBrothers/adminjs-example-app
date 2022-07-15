const { DataTypes } = require('sequelize');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        default: Date.now,
      },
      updatedAt: {
        type: DataTypes.DATE,
        default: Date.now,
      },
    });

    await queryInterface.createTable('products', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: new DataTypes.STRING(),
        allowNull: false,
      },
      price: {
        type: new DataTypes.DECIMAL(15, 6),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        default: Date.now,
      },
      updatedAt: {
        type: DataTypes.DATE,
        default: Date.now,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'categories',
          key: 'id',
        },
        allowNull: false,
      },
    });

    await queryInterface.createTable('orders', {
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
    });

    await queryInterface.createTable('cart_products', {
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
        default: Date.now,
      },
      updatedAt: {
        type: DataTypes.DATE,
        default: Date.now,
      },
      orderId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'orders',
          key: 'id',
        },
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'products',
          key: 'id',
        },
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cart_products');
    await queryInterface.dropTable('orders');
    await queryInterface.dropTable('products');
    await queryInterface.dropTable('categories');
  },
};
