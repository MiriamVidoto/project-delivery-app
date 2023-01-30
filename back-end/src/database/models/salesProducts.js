'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SaleProducts = sequelize.define('SaleProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'sale_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'product_id'
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    tableName: 'salesProducts',
    underscored: true,
    timestamps: false,
  });

  SaleProducts.associate = (models) => {
    SaleProducts.belongsTo(models.Sale, {
      foreignKey:'sale_id',
    });
  },
    SaleProducts.associate = (models) => {
    SaleProducts.belongsTo(models.Products, {
      foreignKey:'product_id',
    });
  }

  return SaleProducts;
};
