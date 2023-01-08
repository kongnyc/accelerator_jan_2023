/**
 * This file represents our Express API application
 *
 * TODOs:
 * - [] Create routes (using hardcoded JSON for now, not a real db):
 *  - [] Health check route to confirm the server is up and running
 *  - [] Get all students
 *  - [] Get student by ID
 *
 * - [] Organize our app into controller and query layers 
 * - [] Use a router to organize the routes by their prefixes (/students, /teachers, /posts, etc.)
 */

const express = require('express');

// Initialize app and general app configuration
const app = express();
app.use(express.json()); // Why do we need this?

// Route handler functions
// app.get('/', (request, response) => {
//   console.log(request, response);
//   console.log(request.method, request.url);
//   response.json({ message: 'Service is running on get main page' });
// });
// app.get('*', (request, response) => {
//   console.log(request, response);
//   console.log(request.path, request.url);
//   response.json({ message: 'Service is running on get main page' });
// });
// app.post('/studentsDB', (request, response) => {
//   console.log(request, response);
//   console.log(request.path, request.body);
//   response.json({ message: 'Service is running on post' });
// });
app.get('/studentsDB/:id', (request, response) => {
  // console.log(request, response);
  //http://localhost:9000/studentsDB/2?name=kong&age=32&sex=male
  console.log(request.params, request.query);
  response.json({ message: 'Service is running on post' });
});

module.exports = app;