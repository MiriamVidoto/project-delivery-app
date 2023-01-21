'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      price: {
        type: DataTypes.DECIMAL(4, 2),
        allowNull: false,
      },
      urlImage: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'urlImage'
      }
    });
  },

  async down (queryInterface, _Sequelize) {
   await queryInterface.dropTable('products');
  }
};
