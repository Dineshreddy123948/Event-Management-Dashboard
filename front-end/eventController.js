// controllers/eventController.js
const Event = require('../models/Event');

// Create an event
exports.createEvent = async (req, res) => {
  const { name, description, location, date } = req.body;
  const event = new Event({ name, description, location, date });
  await event.save();
  res.status(201).json(event);
};

// Get all events
exports.getEvents = async (req, res) => {
  const events = await Event.find();
  res.json(events);
};

// Update an event
exports.updateEvent = async (req, res) => {
  const { id } = req.params;
  const { name, description, location, date } = req.body;
  const event = await Event.findByIdAndUpdate(id, { name, description, location, date }, { new: true });
  res.json(event);
};

// Delete an event
exports.deleteEvent = async (req, res) => {
  const { id } = req.params;
  await Event.findByIdAndDelete(id);
  res.status(204).send();
};
