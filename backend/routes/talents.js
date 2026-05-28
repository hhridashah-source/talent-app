const express = require('express');
const router = express.Router();
const Talent = require('../models/Talent');
const youtubeService = require('../services/youtubeService');
const { verifyToken } = require('../middleware/auth');

// Get all talents
router.get('/', async (req, res) => {
  try {
    const talents = await Talent.find();
    res.json(talents);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get talent by ID
router.get('/:id', async (req, res) => {
  try {
    const talent = await Talent.findById(req.params.id);
    if (!talent) {
      return res.status(404).json({ error: 'Talent not found' });
    }
    res.json(talent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get YouTube tutorials for a talent
router.get('/:id/tutorials', async (req, res) => {
  try {
    const talent = await Talent.findById(req.params.id);
    if (!talent) {
      return res.status(404).json({ error: 'Talent not found' });
    }

    const language = req.query.lang || 'en';
    const tutorials = await youtubeService.getTutorials(talent.youtubeKeyword, 10, language);
    
    res.json({
      talent: talent.name,
      tutorialCount: tutorials.length,
      tutorials,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create talent (admin only)
router.post('/', verifyToken, async (req, res) => {
  try {
    const { name, description, category, youtubeKeyword, difficultyLevel } = req.body;

    const talent = new Talent({
      name,
      description,
      category,
      youtubeKeyword,
      difficultyLevel,
    });

    await talent.save();
    res.status(201).json(talent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
