## Overview of the Dashboard Project

This project is a full-stack application that displays a dynamic admin dashboard using the MERN stack (MongoDB, Express.js, React, and Node.js). The dashboard features charts, tables, and data management capabilities directly interfacing with a MongoDB database.

### Getting the Project

1. **Clone the Repository:**
   
git clone https://github.com/CannaTechNM/schwazze_demo.git

2. **Navigate into the Project Directory:**

   cd schwazze_demo

### Setting Up the Environment

1. **Create Environment Files:** Create a `.env` file in both the client and server directories to manage environment variables.

2. **Environment Variables Configuration:**
- **Server (.env):**
  ```
  MONGO_URI=mongodb+srv://Williammikewhite:MikeWhite123@cluster0.jz6ofgr.mongodb.net/?retryWrites=true&w=majority

  ## Backend Environment Setup

Here's how the `.env` file is set up for the backend part of the application:

![Backend Environment](https://github.com/CannaTechNM/schwazze_demo/blob/main/Screenshot%202024-05-07%20004808.png "Backend Environment Setup")

## Frontend Environment Setup

This image shows the setup of the `.env.local` for the frontend:

![Frontend Environment](https://github.com/CannaTechNM/schwazze_demo/blob/main/Screenshot%202024-05-07%20004750.png "Frontend Environment Setup")



### Installing Dependencies

1. **Node.js Installation:**
Ensure Node.js is installed. If not, download and install from [nodejs.org](https://nodejs.org/).

2. **Install Dependencies:**
Navigate to the server and client directories and run: npm install

### Running the Application

1. **Start the Backend:**

  npm run dev

This starts the backend server, connecting to MongoDB and serving API endpoints.

2. **Start the Frontend:**

   npm run start

This launches the React application in your default web browser, typically at `http://localhost:3000`.

## Data Model

Below is the data model used in the project, showing the relationships between different database entities:

![Data Model](https://github.com/CannaTechNM/schwazze_demo/blob/main/Screenshot%202024-05-07%20010800.png "Data Model")

## Demo Deployment Architecture

This diagram illustrates the deployment architecture of the demo on Render.com, showing how the client and server are configured:

![Demo Deployment Architecture](https://github.com/CannaTechNM/schwazze_demo/blob/main/Screenshot%202024-05-07%20010636.png "Demo Deployment Architecture")

## Client-Side Structure

- **Components** (`/client/src/components`): Components like `Navbar`, `Sidebar`, `Header`, etc., are used for navigation and displaying UI elements such as charts and data tables. These components are reusable across various scenes/pages.

- **Scenes** (`/client/src/scenes`): Scenes are pages or views like `Dashboard`, `Products`, `Customers`, etc. Each scene utilizes various components to assemble the page.

- **App.js**: Acts as the central hub for routing using React Router. It defines routes that load specific scenes based on the URL path.

## Server-Side Structure

- **Routes** (`/server/routes`): Files such as `client.js`, `general.js`, `management.js`, and `sales.js` define API endpoints, handling specific server-side operations.

- **Controllers**: Implement the logic to handle requests at each route, interacting with the database through models and sending responses back to the client.

- **Models**: Define schemas for the data stored in MongoDB, which are used by controllers to interact with the database.

## Interaction

- **Components to Scenes**: Components are imported into scenes to build the user interface. For example, the `Dashboard` scene uses chart components and data table components.

- **Scenes to Routes**: Front-end scenes make API calls to server-side routes, requesting or sending data to be processed by the server.

- **Routes to Controllers**: API routes direct requests to specific controller functions, which execute the required operations (e.g., fetching data, updating records).

- **Controllers to Models**: Controllers use models to query or manipulate the database based on the request received and the logic defined.

## Additional Technologies

- **Mongoose**: Used in the backend to interact with MongoDB.
- **Material-UI**: Used in the client for styling and layout.
- **Redux**: Used for state management in React to store and manage application state.







