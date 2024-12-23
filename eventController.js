// controllers/eventController.js
const Event = require('../models/eventModel');

// Create an Event
const createEvent = async (req, res) => {
  const { name, description, location, date } = req.body;
  try {
    const newEvent = new Event({ name, description, location, date });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get All Events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an Event
const updateEvent = async (req, res) => {
  const { eventId } = req.params;
  const { name, description, location, date } = req.body;
  try {
    const event = await Event.findByIdAndUpdate(eventId, { name, description, location, date }, { new: true });
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an Event
const deleteEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const event = await Event.findByIdAndDelete(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createEvent, getAllEvents, updateEvent, deleteEvent };
