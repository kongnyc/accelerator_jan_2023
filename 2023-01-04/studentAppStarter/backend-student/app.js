const cors = require('cors')
const express = require('express');

const app = express();

const data = require('./db_students.json');

app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json({message: 'Service is running on / main page'});})

app.get('/api', (req, res) => {
     try {
          const { students } = data;
          res.status(200).json({result:students});
     } catch (error) {
          res.status(500).json(error);
     }
}
    )

app.get('/api/:id', (req, res) => {
     const { id } = req.params;
     const { students } = data;

     const student = students.find(student => student.id === id);
     if (student) {
          res.status(200).json({result:student});
     } else {
          res.status(400).json({error:`No Such Student with ID No.:${id} `});    
          
     }
})
app.get('/api/:id/grades', (req, res) => {
     const { id } = req.params;
     const { students } = data;
     const student = students.find(student => student.id === id);
     if (student) {
          res.status(200).json({result:student.grades});
     } else {
          res.status(400).json({error:`No grades for such Student with No.:${id} `});    

     }
})


module.exports = app;

