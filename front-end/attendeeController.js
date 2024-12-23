// controllers/attendeeController.js
const Attendee = require('../models/Attendee');

// Add an attendee
exports.addAttendee = async (req, res) => {
  const { name, email } = req.body;
  const attendee = new Attendee({ name, email });
  await attendee.save();
  res.status(201).json(attendee);
};

// Get all attendees
exports.getAttendees = async (req, res) => {
  const attendees = await Attendee.find();
  res.json(attendees);
};

// Delete an attendee
exports.deleteAttendee = async (req, res) => {
  const { id } = req.params;
  await Attendee.findByIdAndDelete(id);
  res.status(204).send();
};
