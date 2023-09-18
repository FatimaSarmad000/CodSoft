const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// MySQL configuration
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (your HTML and CSS)
app.use(express.static(__dirname));

// Handle POST request from the form
app.post('/your_login_handler', (req, res) => {
  const { username, password } = req.body;

  // Insert the user data into the MySQL database
  const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
  db.query(sql, [username, password], (err, result) => {
    if (err) throw err;
    console.log('User registered');
    res.send('User registered successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
