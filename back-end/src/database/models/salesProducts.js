'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SaleProducts = sequelize.define('SaleProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: 'sale_id'
    },
    productId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      field: 'product_id'
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },{
    tableName: 'sales_products',
    underscored: true,
    timestamps: false,
  });

  SaleProducts.associate = (models) => {
    SaleProducts.belongsTo(models.Sale, {
      through: SaleProducts,
      foreignKey:'saleId',
      otherKey: "productId",
    });
  },
    SaleProducts.associate = (models) => {
    SaleProducts.belongsTo(models.Products, {
      foreignKey:'productId',
      through: SaleProducts,
      otherKey: "saleId",
    });
  }

  return SaleProducts;
};
