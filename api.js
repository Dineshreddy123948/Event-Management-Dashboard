// src/api.js
import axios from 'axios';

const API_URL = "http://localhost:5000/api";  // Backend API URL

// Get all events from the backend
export const getEvents = async () => {
  try {
    const response = await axios.get(`${API_URL}/events`);
    return response.data;  // Return the events data
  } catch (error) {
    throw error;  // Throw error if something goes wrong
  }
};

// Add a new event (example)
export const createEvent = async (eventData) => {
  try {
    const response = await axios.post(`${API_URL}/events`, eventData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
