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

// Serve static files (your HTML, CSS, and JavaScript)
app.use(express.static(__dirname));

// Handle POST request from the payment form
app.post('/process_payment', (req, res) => {
  const { cardNumber, cvv, cardholderName, expiryDate } = req.body;

  // Insert payment details into the MySQL database
  const sql = 'INSERT INTO payments (card_number, cvv, cardholder_name, expiry_date) VALUES (?, ?, ?, ?)';
  db.query(sql, [cardNumber, cvv, cardholderName, expiryDate], (err, result) => {
    if (err) throw err;
    console.log('Payment processed and saved');
    res.send('Payment processed and saved successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
