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
      url_image: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('products');
  }
};
