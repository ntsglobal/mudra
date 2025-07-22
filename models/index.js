const sequelize = require('../config/database');
const User = require('./user.model');
const Wallet = require('./wallet.model');
const Transaction = require('./transaction.model');

// Define Associations
// One-to-One: User has one Wallet
User.hasOne(Wallet, { foreignKey: 'user_id', onDelete: 'CASCADE' });
Wallet.belongsTo(User, { foreignKey: 'user_id' });

// One-to-Many: Wallet has many Transactions
Wallet.hasMany(Transaction, { foreignKey: 'wallet_id', onDelete: 'CASCADE' });
Transaction.belongsTo(Wallet, { foreignKey: 'wallet_id' });

const db = {
  sequelize,
  User,
  Wallet,
  Transaction
};

module.exports = db;