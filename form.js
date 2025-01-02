// script.js

document.getElementById("booking-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Basic validation
    if (!name || !email || !phone || !date || !time) {
        alert("Please fill in all fields.");
        return;
    }

    // Show success message (for demonstration purposes)
    alert("Your booking has been successfully made!");

    // Reset the form after submission
    document.getElementById("booking-form").reset();
});
