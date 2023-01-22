'use strict';

const { DataTypes, fn } = require('sequelize');

module.exports = {
  async up (queryInterface, _Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'user_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      sellerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'seller_id',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
        },
      },
      totalPrice: {
        type: DataTypes.DECIMAL(9, 2),
        field: 'total_price',
        allowNull: false,
      },
      deliveryAddress: {
        type: DataTypes.STRING,
        field: 'delivery_address',
        allowNull: false
      },
      deliveryNumber: {
        type: DataTypes.STRING,
        field: 'delivery_number',
        allowNull: false
      },
      saleDate: {
        type: DataTypes.DATE,
        defaultValue: fn('NOW'),
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false
      },
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('sales');
  }
};

// CASCADE: Atualiza ou exclui os registros da tabela filha automaticamente, ao atualizar ou excluir um registro da tabela pai.
