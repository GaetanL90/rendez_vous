// Function to display profile information
function showProfile() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <h2>Doctor Profile</h2>
        <p><strong>Name:</strong> Dr. Gaetan</p>
        <p><strong>Specialization:</strong> Cardiology</p>
        <p><strong>Hospital:</strong> Gaetan dispanser</p>
        <p><strong>Sector:</strong> Kimihurura</p>
    `;
}
function logout() {
    // Redirect to the login page
    window.location.href = "../../../auth/login/login.html";
    return false; // Prevent form submission (if it's inside a form)
}
// Initial content: profile information
showProfile();
