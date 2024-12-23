// EventPage.js
import React, { useEffect, useState } from 'react';
import { getEvents, deleteEvent } from '../services/api';
import EventCard from '../components/EventCard';

const EventPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents().then(data => setEvents(data));
  }, []);

  const handleDelete = (id) => {
    deleteEvent(id).then(() => {
      setEvents(events.filter(event => event.id !== id));
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Event Management</h1>
      <div className="mt-4">
        {events.map(event => (
          <EventCard key={event.id} event={event} onDelete={handleDelete} />
        ))}
      </div>
    </div>
  );
};

export default EventPage;
