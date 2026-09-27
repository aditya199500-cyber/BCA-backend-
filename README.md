# Student Management REST API

**Student:** Aditya Shrivastava

This project implements a Student Management REST API using Express.js.

## Features

- Express router mounted at `/students`
- GET, POST, PUT and DELETE operations
- HTTP status codes 200, 201, 400 and 404
- try/catch error handling
- Global request logger middleware
- JSON request and response bodies

## Run

```bash
npm install
npm start
```

Server:
`http://localhost:3000`

## API endpoints

- GET `/students`
- GET `/students/:id`
- POST `/students`
- PUT `/students/:id`
- DELETE `/students/:id`

## Example POST body

```json
{
  "name": "Riya",
  "course": "BCA AI & DS"
}
```

## Lab 2 testing

- GET `http://localhost:3000/students` -> expected 200
- POST `http://localhost:3000/students` -> expected 201
- PUT `http://localhost:3000/students/1` -> expected 200
- DELETE `http://localhost:3000/students/99` -> expected 404
