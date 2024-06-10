# Todo App

## Overview

This is a simple Todo application built with FastAPI for the backend, React for the frontend, and MongoDB as the database. The app allows users to create, read, update, and delete tasks.

## Features

- Add new tasks with a title and description.
- View a list of all tasks.
- Delete tasks.
- The frontend communicates with the backend via API calls.

## Technologies Used

- **Backend**: FastAPI
- **Frontend**: React
- **Database**: MongoDB

## Prerequisites

- Node.js and npm
- Python 3.10 or higher
- MongoDB
- Pipenv

## Setup Instructions

### Backend (FastAPI)

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install Dependencies using Pipenv**

   ```bash
   pipenv install
   ```

3. **Activate the Pipenv Shell**

   ```bash
   pipenv shell
   ```

4. **Set Environment Variables**

   Create a `.env` file in the `backend` directory with the following content:

   ```
   MONGO_PASSWORD=<your-mongo-db-connection-string>
   ```

5. **Run the Backend Server**

   ```bash
   uvicorn main:app --reload
   ```

   The backend server will start on `http://localhost:8000`.

### Frontend (React)

1. **Navigate to the Frontend Directory**

   ```bash
   cd frontend
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Frontend Server**

   ```bash
   npm run dev
   ```

   The frontend server will start on `http://localhost:5173`.

## Project Structure

```
/backend
    |-- main.py
    |-- database.py
    |-- model.py
    |-- .env
    |-- Pipfile
    |-- Pipfile.lock
/frontend
    |-- src
        |-- components
            |-- TodoItem.js
            |-- TodoView.js
        |-- App.js
    |-- public
    |-- package.json
    |-- package-lock.json
```

## API Endpoints

- **GET** `/api/todo`: Fetch all todos
- **GET** `/api/todo/{title}`: Fetch a single todo by title
- **POST** `/api/todo`: Create a new todo
- **PUT** `/api/todo/{title}`: Update an existing todo by title
- **DELETE** `/api/todo/{title}`: Delete a todo by title

## Usage

1. **Add a Task**

   - Enter a title and description in the input fields and click "Add Task".

2. **View Tasks**

   - All tasks will be displayed in a list below the input fields.

3. **Delete a Task**
   - Click the "X" button next to a task to delete it.
