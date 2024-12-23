// routes/attendeeRoutes.js
const express = require('express');
const { addAttendee, getAllAttendees, deleteAttendee } = require('../controllers/attendeeController');
const router = express.Router();

// Attendee routes
router.post('/', addAttendee);
router.get('/', getAllAttendees);
router.delete('/:attendeeId', deleteAttendee);

module.exports = router;
