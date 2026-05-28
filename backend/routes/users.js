const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { verifyToken } = require('../middleware/auth');

// Get user profile
router.get('/:userId', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
      .populate('talents', 'name category')
      .populate('videos', 'title videoUrl');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user profile
router.put('/:userId', verifyToken, async (req, res) => {
  try {
    if (req.userId !== req.params.userId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const { bio, profilePicture, preferredLanguage } = req.body;

    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { bio, profilePicture, preferredLanguage },
      { new: true }
    );

    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get user's videos
router.get('/:userId/videos', async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate('videos');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user.videos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
