
const express = require('express');

const app = express();

const data = require('./db_students.json');

app.get('/', (req, res) => {
  res.json( {message: 'Service is running on / main page'} );})


app.get('/api', (req, res) => {res.send({data})});

module.exports = app;
