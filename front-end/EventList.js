// src/components/EventList.js
import React, { useState, useEffect } from 'react';
import { getEvents } from '../api';  // Import the getEvents function

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch events when the component mounts
    const fetchEvents = async () => {
      try {
        const data = await getEvents();  // Call the API function
        setEvents(data);  // Set events data
        setLoading(false);  // Set loading to false
      } catch (err) {
        setError('Failed to fetch events');
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <div>Loading...</div>;  // Display loading indicator
  if (error) return <div>{error}</div>;  // Display error message

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <h3>{event.name}</h3>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
