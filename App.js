// src/App.js
import React from 'react';
import EventList from './components/EventList';
import AddEventForm from './components/AddEventForm';

const App = () => {
  return (
    <div>
      <h1>Event Management Dashboard</h1>
      <AddEventForm />
      <EventList />
    </div>
  );
};

export default App;
