const express = require('express');
const router = express.Router();
const Transmission = require('../models/Transmission');

// POST /api/acars - Dispatch ACARS contact message to DB
router.post('/', async (req, res) => {
  try {
    const { callsign, frequency, message } = req.body;
    if (!callsign || !frequency || !message) {
      return res.status(400).json({ message: 'All telemetry fields required.' });
    }
    const transmission = new Transmission({ callsign, frequency, message });
    await transmission.save();
    res.status(201).json({ status: 'ACKNOWLEDGED', message: 'Transmission logged in database.' });
  } catch (error) {
    res.status(500).json({ message: 'Transmission dispatch failed', error: error.message });
  }
});

module.exports = router;