// models/taskModel.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  name: { type: String, required: true },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'Attendee' },
  event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' },
  status: { type: String, enum: ['Pending', 'Completed'], default: 'Pending' },
  deadline: { type: Date }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
