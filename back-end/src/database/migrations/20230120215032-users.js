'use strict';

const { DataTypes } = require('sequelize');

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
   
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  }
};
