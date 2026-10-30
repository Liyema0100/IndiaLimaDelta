const mongoose = require('mongoose');

const transmissionSchema = new mongoose.Schema({
  callsign: { type: String, required: true },
  frequency: { type: String, required: true }, // Email address
  message: { type: String, required: true },
  receivedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Transmission', transmissionSchema);