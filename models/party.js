const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Assuming your Sequelize setup file is in the parent directory

const Party = sequelize.define('party', {
  party_id: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    allowNull: false
  },
  party_enum_type_id: {
    type: DataTypes.STRING(20),
    allowNull: true
  }
}, {
  freezeTableName: true, // Prevent Sequelize from automatically pluralizing table names
  timestamps: false // Disable timestamps for this model
});

module.exports = Party;
