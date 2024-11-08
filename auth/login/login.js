document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const emailOrPhone = document.getElementById('emailOrPhone').value;
    const password = document.getElementById('password').value;

    fetch(`/auth/login?emailOrPhone=${emailOrPhone}&password=${password}`)
        .then(response => response.json())
        .then(data => {
            if (data.redirectUrl) {
                window.location.href = data.redirectUrl; // Redirect to the portal based on user role
            } else {
                alert('Login failed');
            }
        })
        .catch(error => console.error('Error:', error));
});
