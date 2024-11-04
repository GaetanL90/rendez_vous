function submitReschedule() {
    var appointmentId = document.getElementById("appointmentId").value;
    var newDate = document.getElementById("newDate").value;
    
    // Simulate submitting reschedule request to server
    // You can use AJAX to send the data to the server
    alert("Appointment reschedule requested:\nAppointment ID: " + appointmentId + "\nNew Date: " + newDate);
}
function logout() {
    // Redirect to the login page
    window.location.href = "../../auth/login/login.html";
    return false; // Prevent form submission (if it's inside a form)
}
