
$(document).ready(function () {
    $("#login_user").submit(function (event) {
        event.preventDefault();

        // Get form data
        const formData = $(this).serialize();

        // Send AJAX request to the server for login authentication
        $.ajax({
            type: "POST",
            url: "/api/users-login", 
            data: formData,
            success: function (response) {
                if (response.success) {
                    window.location.href = '/records-user'; 
                } else {                   
                    alert(response.message);
                }
            },
            error: function (error) {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            }
        });
    });
});


$(document).ready(function () {
    $("#add_user").submit(function (event) {
        event.preventDefault();

        // Get form data
        const formData = $(this).serialize();

        // Send AJAX request to the server for login authentication
        $.ajax({
            type: "POST",
            url: "/api/users-create", // Update the URL according to your server route
            data: formData,
            success: function (response) {
                // Check the response from the server
                if (response.success) {
                    // Redirect to another page upon successful login
                    window.location.href = '/'; // Change the URL accordingly
                } else {
                    // Display an alert for other messages
                    alert(response.message);
                }
            },
            error: function (error) {
                console.error("Error:", error);
                alert("An error occurred. Please try again.");
            }
        });
    });
});