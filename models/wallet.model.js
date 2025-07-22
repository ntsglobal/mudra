const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Wallet = sequelize.define('Wallet', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  user_id: {
    type: DataTypes.INTEGER,
    unique: true, // One wallet per user
    allowNull: false,
    references: { // Define foreign key relationship
      model: 'users', // Refers to the 'users' table
      key: 'id'
    }
  },
  balance: {
    type: DataTypes.DECIMAL(18, 2), // Use DECIMAL for currency
    defaultValue: 0.00,
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING(20),
    defaultValue: 'NTS Mudra',
    allowNull: false
  }
}, {
  timestamps: true,
  tableName: 'wallets'
});

module.exports = Wallet;