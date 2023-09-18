// Get a reference to the submit button
const submitButton = document.getElementById('submitButton');

// Function to show an alert when the button is clicked
function showAlert() {
    alert('View Details'); // You can customize this message
    window.location.href = 'details.html';
}

// Attach the showAlert function to the button's click event
submitButton.addEventListener('click', showAlert);

