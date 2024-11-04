function submitRequest() {
    var doctor = document.getElementById("doctor").value;
    var date = document.getElementById("date").value;
    
    // Simulate submitting request to server
    // You can use AJAX to send the data to the server
    alert("Appointment request submitted:\nDoctor: " + doctor + "\nDate: " + date);
}

function submitReschedule() {
    var appointmentId = document.getElementById("appointmentId").value;
    var newDate = document.getElementById("newDate").value;
    
    // Simulate submitting reschedule request to server
    // You can use AJAX to send the data to the server
    alert("Appointment reschedule requested:\nAppointment ID: " + appointmentId + "\nNew Date: " + newDate);
}

// Display appointment history
var historyList = document.getElementById("historyList");
var appointments = [
    { id: "123", doctor: "Dr. Smith", date: "2023-09-01" },
    { id: "124", doctor: "Dr. Johnson", date: "2023-09-15" },
    // ... add more appointment data
];

appointments.forEach(function(appointment) {
    var listItem = document.createElement("li");
    listItem.textContent = "Appointment ID: " + appointment.id + ", Doctor: " + appointment.doctor + ", Date: " + appointment.date;
    historyList.appendChild(listItem);
});
function submitRequest() {
    var doctor = document.getElementById("doctor").value;
    var date = document.getElementById("date").value;
    
    // Simulate submitting request to server
    // You can use AJAX to send the data to the server
    alert("Appointment request submitted:\nDoctor: " + doctor + "\nDate: " + date);
}

function submitReschedule() {
    var appointmentId = document.getElementById("appointmentId").value;
    var newDate = document.getElementById("newDate").value;
    
    // Simulate submitting reschedule request to server
    // You can use AJAX to send the data to the server
    alert("Appointment reschedule requested:\nAppointment ID: " + appointmentId + "\nNew Date: " + newDate);
}

// Display appointment history
var historyList = document.getElementById("historyList");
var appointments = [
    { id: "123", doctor: "Dr. Smith", date: "2023-09-01" },
    { id: "124", doctor: "Dr. Johnson", date: "2023-09-15" },
    // ... add more appointment data
];

appointments.forEach(function(appointment) {
    var listItem = document.createElement("li");
    listItem.textContent = "Appointment ID: " + appointment.id + ", Doctor: " + appointment.doctor + ", Date: " + appointment.date;
    historyList.appendChild(listItem);
});
