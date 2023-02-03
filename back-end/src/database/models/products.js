'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Products = sequelize.define('Products', {
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
      field: 'url_image'
    }
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'products',
  });

  Products.associate = (models) => {
    Products.hasMany(models.SaleProducts, {
      foreignKey: 'productId',
      as:'saleProducts',
    })
  }
  return Products;
};
