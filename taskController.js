// controllers/taskController.js
const Task = require('../models/taskModel');

// Create a Task
const createTask = async (req, res) => {
  const { name, assignedTo, event, deadline } = req.body;
  try {
    const newTask = new Task({ name, assignedTo, event, deadline });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get Tasks for an Event
const getTasksForEvent = async (req, res) => {
  const { eventId } = req.params;
  try {
    const tasks = await Task.find({ event: eventId }).populate('assignedTo');
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update Task Status
const updateTaskStatus = async (req, res) => {
  const { taskId } = req.params;
  const { status } = req.body;
  try {
    const task = await Task.findByIdAndUpdate(taskId, { status }, { new: true });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createTask, getTasksForEvent, updateTaskStatus };
