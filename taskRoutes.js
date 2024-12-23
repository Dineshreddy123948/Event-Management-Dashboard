// routes/taskRoutes.js
const express = require('express');
const { createTask, getTasksForEvent, updateTaskStatus } = require('../controllers/taskController');
const router = express.Router();

// Task routes
router.post('/', createTask);
router.get('/:eventId', getTasksForEvent);
router.put('/:taskId', updateTaskStatus);

module.exports = router;
