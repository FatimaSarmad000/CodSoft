const express = require('express');
const app = express();
const port = 3000;

// Serve static files (your HTML, CSS, and JavaScript)
app.use(express.static(__dirname));

// Handle flight selection and redirection
app.get('/select-flight', (req, res) => {
  // You can perform any necessary server-side logic here
  // For now, we'll simply redirect to the seat selection page
  res.redirect('/seat.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
