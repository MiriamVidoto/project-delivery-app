'use strict';
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'user_id'
    },
    sellerId: {
      type: DataTypes.INTEGER,
      field: 'seller_id'
    },
    totalPrice: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
      field: 'total_price'
    },
    deliveryAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'delivery_address'
    },
    deliveryNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'delivery_number'
    },
    saleDate: {
      type: DataTypes.DATE,
    },
    status: {
        type: DataTypes.STRING,
    }
  },{
    tableName: 'sales',
    underscored: true,
    timestamps: false,
  })

  Sale.associate = (models) => {
    Sale.hasMany(models.SaleProduct, {
      foreignKey: 'sale_id',    
    });
  };

    Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreignKey:'user_id',
    });
  }

  return Sale;
};
