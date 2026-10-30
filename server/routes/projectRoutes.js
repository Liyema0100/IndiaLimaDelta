const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET /api/projects - Fetch all software projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Avionics Database Error', error: error.message });
  }
});

// POST /api/projects - Add a new project
router.post('/', async (req, res) => {
  try {
    const newProject = new Project(req.body);
    const saved = await newProject.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ message: 'Failed to log project', error: error.message });
  }
});

module.exports = router;