const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import the database connection

// Define the Project model using the imported sequelize instance
const Project = sequelize.define('Project', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING
  },
  imageUrl: {
    type: DataTypes.STRING
  }
});

// Export the initialized model
module.exports = Project;