const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Assuming your Sequelize setup file is in the parent directory

const OrderItem = sequelize.define('order_item', {
  order_id: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    allowNull: false
  },
  order_item_seq_id: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    allowNull: false
  },
  product_id: {
    type: DataTypes.STRING(20),
    allowNull: true,
    references: {
      model: 'Product',
      key: 'product_id'
    }
  },
  item_description: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  quantity: {
    type: DataTypes.DECIMAL(24, 4),
    allowNull: true
  },
  unit_amount: {
    type: DataTypes.DECIMAL(24, 4),
    allowNull: true
  },
  item_type_enum_id: {
    type: DataTypes.STRING(20),
    allowNull: true
  }
}, {
  freezeTableName: true, // Prevent Sequelize from automatically pluralizing table names
  timestamps: false // Disable timestamps for this model
});

module.exports = OrderItem;
