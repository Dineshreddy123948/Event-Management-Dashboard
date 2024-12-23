// event-management-backend/server.js
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(express.json());  // Parse JSON requests

// Dummy event data
let events = [
  { id: 1, name: 'Tech Conference', description: 'A tech event', location: 'New York', date: '2024-05-10' },
  { id: 2, name: 'Music Festival', description: 'A live music event', location: 'Los Angeles', date: '2024-06-15' },
];

// GET: Get all events
app.get('/api/events', (req, res) => {
  res.status(200).json(events);
});

// POST: Create an event
app.post('/api/events', (req, res) => {
  const newEvent = req.body;
  newEvent.id = events.length + 1;
  events.push(newEvent);
  res.status(201).json(newEvent);
});

// PUT: Update an event
app.put('/api/events/:id', (req, res) => {
  const { id } = req.params;
  const updatedEvent = req.body;
  events = events.map((event) => (event.id === parseInt(id) ? { ...event, ...updatedEvent } : event));
  res.status(200).json(updatedEvent);
});

// DELETE: Delete an event
app.delete('/api/events/:id', (req, res) => {
  const { id } = req.params;
  events = events.filter((event) => event.id !== parseInt(id));
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
