// controllers/taskController.js
const Task = require('../models/Task');

// Create a task
exports.createTask = async (req, res) => {
  const { name, deadline, status, attendee } = req.body;
  const task = new Task({ name, deadline, status, attendee });
  await task.save();
  res.status(201).json(task);
};

// Get tasks for an event
exports.getTasks = async (req, res) => {
  const { eventId } = req.params;
  const tasks = await Task.find({ event: eventId });
  res.json(tasks);
};

// Update task status
exports.updateTaskStatus = async (req, res) => {
  const { taskId } = req.params;
  const { status } = req.body;
  const task = await Task.findByIdAndUpdate(taskId, { status }, { new: true });
  res.json(task);
};
