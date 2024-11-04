function validateLogin(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Replace these values with your actual authentication logic
    var validCredentials = [
        { username: "admin", password: "admin123", dashboardURL: "../../admin-portal/dashboard/dashboard.html" },
        { username: "patient", password: "patient123", dashboardURL: "../../patient-portal/request-appointment/request.html" },
        { username: "aminicolas90@gmail.com", password: "yverry1@", dashboardURL: "../../patient-portal/request-appointment/request.html" },
        { username: "doctor", password: "doctor123", dashboardURL: "../../doctor-portal/dashboard/profile/profile.html" },
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
