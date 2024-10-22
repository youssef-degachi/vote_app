const express = require('express');
const path = require('path');
const mysql = require('mysql');

const port = 3000;
let app = express();

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login/', 'login.html'));
});

app.listen(port);


// MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_app'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;

  connection.query(query, (err, result) => {
    if (err) throw err;

    if (result.length > 0) {
      res.send('Login successful');
    } else {
      res.send('Invalid credentials');
    }
  });
});


