// routes/walletRoutes.js
const express = require('express');
const router = express.Router();
const { Wallet, Transaction } = require('../models');

// This route handles GET requests to /api/wallet
router.get('/wallet', async (req, res) => {
  try {
    const wallet = await Wallet.findOne();
    if (wallet) {
      res.json(wallet);
    } else {
      res.status(404).json({ message: "Wallet not found" });
    }
  } catch (error) {
    console.error("Error fetching wallet data:", error);
    res.status(500).json({ message: "Error fetching wallet data" });
  }
});

// This route handles GET requests to /api/transactions
router.get('/transactions', async (req, res) => {
  try {
    const transactions = await Transaction.findAll({ 
      limit: 10, 
      order: [['createdAt', 'DESC']] 
    });
    res.json(transactions);
  } catch (error) {
    console.error("Error fetching transactions:", error);
    res.status(500).json({ message: "Error fetching transactions" });
  }
});

module.exports = router;