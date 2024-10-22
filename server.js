const express = require('express');
const path = require('path');
const mysql = require('mysql');

const port = 3000;
let app = express();

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login/', 'login.html'));
});




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

// routes
app.get('/', (req, res) => {
  var sql = 'SELECT * FROM certif'
  connection.query(sql,  function(err, results) {
    console.log(results)
    res.send(results)
  });
})

// app.post('/',(req,res) => {
//   var sql = "INSERT INTO certif VAL(,)"
// })


app.listen(port)