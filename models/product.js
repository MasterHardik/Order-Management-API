const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Assuming your Sequelize setup file is in the parent directory

const Product = sequelize.define('product', {
  product_id: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    allowNull: false
  },
  party_id: {
    type: DataTypes.STRING(20),
    allowNull: true,
    references: {
      model: 'Party',
      key: 'party_id'
    }
  },
  product_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  description: {
    type: DataTypes.STRING(1000),
    allowNull: true
  },
  charge_shipping: {
    type: DataTypes.CHAR(1),
    allowNull: true
  },
  returnable: {
    type: DataTypes.CHAR(1),
    allowNull: true
  }
}, {
  freezeTableName: true, // Prevent Sequelize from automatically pluralizing table names
  timestamps: false // Disable timestamps for this model
});

module.exports = Product;