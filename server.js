const express = require('express');
const path = require('path');
const mysql = require('mysql');
var hbs = require('express-hbs');

const port = 3000;
let app = express();

app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login/', 'login.html'));
});


//configuration

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials',
  layoutsDir: __dirname + '/views/layouts',
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');




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
    res.render("index",{
      layout: "main",
    })
  });
})


app.listen(port)