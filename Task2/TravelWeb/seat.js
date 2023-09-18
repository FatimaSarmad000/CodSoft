const seats = document.querySelectorAll('.seat.available');
const confirmButton = document.getElementById('confirmButton');

seats.forEach(seat => {
    seat.addEventListener('click', () => {
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
        } else {
            seat.classList.add('selected');
        }

        updateConfirmButtonState();
    });
});

function updateConfirmButtonState() {
    const selectedSeats = document.querySelectorAll('.seat.selected');
    confirmButton.disabled = selectedSeats.length === 0;
}
