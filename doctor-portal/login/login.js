function validateLogin(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Replace these values with your actual authentication logic
    var validCredentials = [
        { username: "customer", password: "customer123", dashboardURL: "../dashboard/approve/approve.html" },
        { username: "admin", password: "admin123", dashboardURL: "admin.html" }
        // Add more valid credentials as needed
    ];

    var matchedCredential = validCredentials.find(function(credential) {
        return credential.username === username && credential.password === password;
    });

    if (matchedCredential) {
        // Successful login - redirect to the corresponding dashboard
        window.location.href = matchedCredential.dashboardURL;
    } else {
        alert('Invalid username or password. Please try again.');
    }
}
