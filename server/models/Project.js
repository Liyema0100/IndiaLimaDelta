const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  stack: { type: [String], required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ['ACTIVE', 'STABLE', 'DEVELOPMENT'], default: 'ACTIVE' },
  link: { type: String, default: '#' }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);