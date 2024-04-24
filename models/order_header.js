const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Assuming your Sequelize setup file is in the parent directory

const OrderHeader = sequelize.define('order_header', {
  order_id: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    allowNull: false
  },
  order_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  placed_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  approved_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status_id: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  party_id: {
    type: DataTypes.STRING(20),
    allowNull: true,
    references: {
      model: 'Party', // Assuming 'Party' is the name of the referenced table
      key: 'party_id'
    }
  },
  currency_uom_id: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  product_store_id: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  sales_channel_enum_id: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  grand_total: {
    type: DataTypes.DECIMAL(24, 4),
    allowNull: true
  },
  completed_date: {
    type: DataTypes.DATE,
    allowNull: true
  }
}, {
  freezeTableName: true, // Prevent Sequelize from automatically pluralizing table names
  timestamps: false // Disable timestamps for this model
});

module.exports = OrderHeader;
