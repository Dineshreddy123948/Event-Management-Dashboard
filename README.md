# Event-Management-Dashboard

# Overview

The Event Management Dashboard is a web-based application designed to streamline the process of organizing and managing events. It enables users to create events, assign tasks, manage attendees, and track task progress with visual indicators. This project was developed as part of the Hackathon Assignment for Webknot.

# Features

Event Management

Add, edit, delete, and view events.

Display event details, including name, description, location, and date.\

Attendee Management

View and manage attendees for events.

Assign attendees to specific events and tasks.

Task Tracker

View tasks associated with events.

Update task status (Pending/Completed).

Visualize task progress using progress bars.

# Main Components

1. Event Management Page

2. Attendee Management Page

3. Task Tracker Page

# Technologies Used

Frontend

React.js (or your framework of choice)

CSS for styling (Bootstrap/Tailwind CSS for responsive design)

Backend

Node.js with Express.js

MongoDB for data persistence

Setup Instructions

Clone the repository:

git clone https://github.com/Dineshreddy123948/Event-Management-Dashboard

Install dependencies for both frontend and backend:

cd frontend

npm install

cd ..

cd backend

npm install

Configure the environment variables:

Create a .env file in the backend folder with the following keys:

MONGO_URI=<your-mongodb-connection-string>
PORT=5000

Start the application:

cd backend

npm start

cd frontend

npm start

Access the application at http://localhost:3000.

# Bonus Features

Authentication for accessing the dashboard (Login/Logout).

Calendar view for displaying events visually.

Real-time updates using WebSockets for task progress.

# Contributors

Dinesh Kumar Reddy

# License

This project is licensed under the MIT License.
