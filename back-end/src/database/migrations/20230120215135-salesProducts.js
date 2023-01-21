'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.createTable('salesProducts', { saleId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'sale_id',
      references: {
        model: 'sales',
        key: 'id',
      },
    },
    productId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
      field: 'product_id',
      references: {
        model: 'products',
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    }});
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('salesProducts');
  }
};
