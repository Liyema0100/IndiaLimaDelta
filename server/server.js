const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/fmc_portfolio')
  .then(() => console.log('[AVIONICS DB] Connected to MongoDB'))
  .catch((err) => console.error('[AVIONICS DB ERROR]', err));

// Route Handlers
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/acars', require('./routes/contactRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`[FLIGHT SERVER] Online on port ${PORT}`));