// src/components/AddEventForm.js
import React, { useState } from 'react';
import { createEvent } from '../api';  // Import the createEvent function

const AddEventForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const newEvent = { name, description };

    try {
      const createdEvent = await createEvent(newEvent);  // Call the API function to create the event
      setLoading(false);
      setMessage(`Event "${createdEvent.name}" created successfully!`);
    } catch (err) {
      setLoading(false);
      setMessage('Failed to create event.');
    }
  };

  return (
    <div>
      <h2>Add Event</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Adding Event...' : 'Add Event'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddEventForm;
