// --- 1. IMPORTS ---
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('./models');

// --- 2. CONFIGURATION ---
dotenv.config();
const app = express();
const PORT = process.env.PORT || 8080;

// --- 3. MIDDLEWARE ---
app.use(cors());
app.use(express.json());

// --- 4. API ROUTES ---
// The server now uses the dedicated route files.
app.use('/api', require('./routes/walletRoutes'));
app.use('/api', require('./routes/projectRoutes'));

// A simple test route to check if the server is running
app.get('/', (req, res) => {
  res.send('NTS Mudra Wallet Backend is running!');
});

// --- 5. SERVER STARTUP ---
app.listen(PORT, async () => {
  try {
    await db.sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    
    await db.sequelize.sync({ alter: true });
    console.log('Database synchronized. Tables created/updated.');
    
    console.log(`Server running on port ${PORT}`);
  } catch (error) {
    console.error('Unable to start the server:', error);
  }
});