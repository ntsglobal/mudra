// Import the Sequelize library
const { Sequelize } = require('sequelize');

// Load environment variables from the .env file
require('dotenv').config();

// Create a new Sequelize instance to connect to the database
const sequelize = new Sequelize(
  process.env.DB_NAME,      // Database name
  process.env.DB_USER,      // Database username
  process.env.DB_PASSWORD,  // Database password
  {
    host: process.env.DB_HOST, // Database host (e.g., 'localhost')
    dialect: 'mysql',          // Specify that we are using MySQL
    
    // Set to true if you want to see every SQL query in the terminal
    logging: false, 
    
    // Connection pool settings for performance
    pool: {
      max: 5,       // Maximum number of connections in pool
      min: 0,       // Minimum number of connections in pool
      acquire: 30000, // The maximum time, in milliseconds, that pool will try to get connection before throwing error
      idle: 10000     // The maximum time, in milliseconds, that a connection can be idle before being released
    }
  }
);

// Export the configured sequelize instance to be used in other parts of the app
module.exports = sequelize;