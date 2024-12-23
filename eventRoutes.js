// routes/eventRoutes.js
const express = require('express');
const { createEvent, getAllEvents, updateEvent, deleteEvent } = require('../controllers/eventController');
const router = express.Router();

// Event routes
router.post('/', createEvent);
router.get('/', getAllEvents);
router.put('/:eventId', updateEvent);
router.delete('/:eventId', deleteEvent);

module.exports = router;
