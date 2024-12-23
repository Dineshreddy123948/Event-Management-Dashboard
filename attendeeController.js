// controllers/attendeeController.js
const Attendee = require('../models/attendeeModel');
const Event = require('../models/eventModel');

// Add an Attendee
const addAttendee = async (req, res) => {
  const { name, email, phone, events } = req.body;
  try {
    const newAttendee = new Attendee({ name, email, phone, events });
    await newAttendee.save();
    res.status(201).json(newAttendee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Attendees
const getAllAttendees = async (req, res) => {
  try {
    const attendees = await Attendee.find().populate('events');
    res.status(200).json(attendees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an Attendee
const deleteAttendee = async (req, res) => {
  const { attendeeId } = req.params;
  try {
    const attendee = await Attendee.findByIdAndDelete(attendeeId);
    if (!attendee) return res.status(404).json({ message: 'Attendee not found' });
    res.status(200).json({ message: 'Attendee deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addAttendee, getAllAttendees, deleteAttendee };
