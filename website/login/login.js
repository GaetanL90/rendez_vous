// login.js

function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform validation here
    if (!username || !password) {
        alert("Please enter both username and password.");
        return false;
    } else {
        if (username === "gaetanl90" && password === "gyit60@") {
            // Redirect to home page if credentials match
            console.log("Redirecting to home page...");
            window.location.href = "../home/home.html";
            return true;
        } else {
            // You can perform further validation or AJAX call here
            // For now, let's simulate successful login
            alert("Login successful!");
            return true;
        }
    }
}
