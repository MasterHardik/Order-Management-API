const { DataTypes } = require('sequelize');
const sequelize = require('./sequelize'); // Assuming you have Sequelize set up and configured

const Person = sequelize.define('person', {
  party_id: {
    type: DataTypes.STRING(20),
    primaryKey: true,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  middle_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  last_name: {
    type: DataTypes.STRING(255),
    allowNull: true
  },
  gender: {
    type: DataTypes.CHAR(1),
    allowNull: true
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: true
  },
  marital_status_enum_id: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  employment_status_enum_id: {
    type: DataTypes.STRING(20),
    allowNull: true
  },
  occupation: {
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  freezeTableName: true, // Prevent Sequelize from automatically pluralizing table names
  timestamps: false // Disable timestamps for this model
});

module.exports = Person;
