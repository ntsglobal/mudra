const express = require('express');
const dotenv = require('dotenv');
const db = require('./models'); // Import your models and sequelize instance

dotenv.config(); // Load environment variables from .env

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON requests
app.use(express.json());

// Basic test route
app.get('/', (req, res) => {
  res.send('NTS Mudra Wallet Backend is running!');
});

// Database synchronization and server start
db.sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
    // This will create/update tables based on your model definitions.
    // For production, you'd typically use dedicated migration tools for controlled changes.
    // 'alter: true' tries to make minimal changes without dropping tables, useful for dev.
    return db.sequelize.sync({ alter: true });
  })
  .then(() => {
    console.log('Database synchronized. Tables created/updated.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database or sync models:', err);
  });