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

