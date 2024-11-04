

function validateSignup() {
    var fullname = document.getElementById("fullname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var id = document.getElementById("id").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm_password").value;

    // Perform validation here
    if (!fullname || !email || !phone || !id || !password || !confirm_password) {
        alert("Please fill in all fields.");
        return;
    }

    if (password !== confirm_password) {
        alert("Passwords do not match.");
        return;
    }

    // Validation passed, submit the form (you can replace this with an AJAX call)
    document.getElementById("signupForm").submit();
}
