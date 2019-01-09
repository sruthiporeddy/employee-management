const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');
const app = express();
const employees = JSON.parse(fs.readFileSync('data/employees.json','utf-8'));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/api/employees', (req,res) => {
  res.json(employees);
})

app.listen(3000, (success) => {
  console.log("server started successfully");
})
