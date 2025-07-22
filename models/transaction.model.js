const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Transaction = sequelize.define('Transaction', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  wallet_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { // Define foreign key relationship
      model: 'wallets', // Refers to the 'wallets' table
      key: 'id'
    }
  },
  type: {
    type: DataTypes.STRING(20), // 'credit' or 'debit'
    allowNull: false
  },
  amount: {
    type: DataTypes.DECIMAL(18, 2),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(255),
    allowNull: true // Description can be optional
  }
}, {
  timestamps: true, // This adds createdAt and updatedAt fields automatically
  tableName: 'transactions'
});

module.exports = Transaction;