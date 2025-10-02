📚 Evangadi Forum API Backend
This project serves as the backend API for the Evangadi Forum application, built using Node.js, Express, and MySQL.

Prerequisites
Before running the server, ensure you have the following installed:

Node.js (v18+)

MySQL Database Server

The project dependencies (installed via npm install)  
Installation & Setup
Clone the repository.

Install dependencies:

npm install

Configure Environment Variables: Create a file named .env in the root directory and populate it with your configuration:

PORT=5000
DB_USER=...
DB_PASSWORD=...
DB_HOST=...
DB_DATABASE=...
JWT_SECRET=YOUR_VERY_SECURE_SECRET_KEY
Running the Server
Start the application using nodemon (if installed as a dev dependency) for development, or node for production:

# For development (with nodemon)
npm start 

# OR (if you use node directly)
node server.js

The server will start at http://localhost:5000 (or the port defined in your .env file).

📁 Project Structure
The application follows a modular structure to separate concerns:

├── Controller/
│   └── userController.js  # Contains core business logic (e.g., getSingleQuestion) and handles DB interaction.
├── db/
│   └── dbconfig.js        # Manages the robust MySQL connection pool and exports the promise-based connection.
├── middleware/
│   └── authMiddleware.js  # Handles JWT authentication and verifies user access to protected routes.
├── Routes/
│   └── userRoutes.js      # Defines the structure of API endpoints and links them to Controller functions.
├── .env                   # Configuration file (ignored by Git for security).
└── server.js              # The application entry point, sets up middleware, loads routes, and starts the server.
Available Endpoints
Method

Path

Description

Access

Status

GET

/api/question/:question_id

Retrieves details for a specific question.

Protected (Requires JWT)

Implemented

POST

/api/users/register

User registration (Placeholder)

Public

Placeholder

POST

/api/users/login

User login (Placeholder)

Public

Placeholder