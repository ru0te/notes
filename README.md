# Notes App

A simple React application built with Vite that allows users to create, read, update, and delete notes, powered by `json-server` for mock backend persistence.

## Features

- View a list of notes fetched from the backend server.
- Add new notes with random importance toggles.
- Update existing note content.
- Delete notes.

## Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed.

### Installation & Setup

1. **Clone the repository and install dependencies:**

   ```bash
   npm install
   ```

2. **Run the JSON Server (Mock Backend):**
   This starts the local backend server on port `3001` using `db.json`.

   ```bash
   npm run server
   ```

3. **Run the Development Server:**
   In a separate terminal window, start the React Vite dev server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to the URL provided by Vite (usually `http://localhost:5173`).
