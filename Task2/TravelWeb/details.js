// Get a reference to the print button
const printButton = document.getElementById('printButton');

// Add a click event listener to the print button
printButton.addEventListener('click', function() {
    // Print the ticket
    window.print();
});

function logout() {
    // Display a "Logged out successfully" message using an alert
    alert('Logged out successfully');
    
    // You can also include additional logout logic here
    // For example, redirecting to a logout page
    // window.location.href = 'logout.html';
}
