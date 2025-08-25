// routes/projectRoutes.js
const express = require('express');
const router = express.Router();
const { Project } = require('../models');

// This route handles GET requests to /api/projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    res.status(500).json({ message: "Error fetching projects" });
  }
});

module.exports = router;