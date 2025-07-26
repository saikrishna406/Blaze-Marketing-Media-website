const express = require('express');
const mongoose = require('mongoose');
const winston = require('winston');
const { check, validationResult } = require('express-validator');
require('dotenv').config();

const app = express();
app.use(express.json());

// Setup Winston logger
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.Console({ format: winston.format.simple() })
  ]
});

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  maxPoolSize: 10 // Use maxPoolSize for connection pooling
}).then(() => logger.info('MongoDB connected'))
  .catch(err => logger.error('MongoDB connection error:', err));

// Booking Schema
const bookingSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  topic: String,
  date: Date,
  timeSlot: String
});

const Booking = mongoose.model('Booking', bookingSchema);

// API routes
app.post('/api/bookings', [
  check('name').isString().notEmpty(),
  check('email').isEmail(),
  check('phone').isMobilePhone(),
  check('topic').isString().notEmpty(),
  check('date').isISO8601(),
  check('timeSlot').isString().notEmpty()
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    logger.error('Error saving booking:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/bookings', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    logger.error('Error fetching bookings:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => logger.info(`Server running on port ${PORT}`));