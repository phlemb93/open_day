# NOTE

To get started, follow the instructions below to set up and run the website locally on your machine.

## Prerequisites

Before running the web app, ensure that you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/) (including npm) - The JavaScript runtime and package manager.
- [json-server](https://github.com/typicode/json-server) - A full fake REST API that simulates a real server.

## Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone [repository-url]
   ```

2. **Navigate to the Project Directory:**
   ```bash
   cd test-webapp
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Start the JSON Server:**
   Use the following command to start the JSON server with the provided OpenDay JSON file.
   ```bash
   npx json-server -w src/services/data/OpenDay.json
   ```

5. **Start the Web App:**
   Open a new terminal window and run the following command to start the web app.
   ```bash
   npm run dev
   ```
