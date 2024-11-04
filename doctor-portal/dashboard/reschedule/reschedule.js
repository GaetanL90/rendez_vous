var content = document.getElementById("content");
var appointments = [
    { id: 1, patient: "Alice Johnson", date: "2023-08-20", appointmentDate: "2023-09-01", time: "10:00 AM", status: "approved", phone: "123-456-7890" },
    { id: 2, patient: "Bob Smith", date: "2023-08-22", appointmentDate: "2023-09-03", time: "2:30 PM", status: "approved", phone: "987-654-3210" },
    { id: 3, patient: "Eve Williams", date: "2023-08-25", appointmentDate: "2023-09-02", time: "9:15 AM", status: "approved", phone: "555-123-4567" },
    // Add more appointments...
];

// Add event listeners to navigation links

// Display reschedule appointments section
function showRescheduleAppointments() {
    var rescheduleAppointmentsHtml = `
        <h2>Reschedule Appointments</h2>
        <table border="1" cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Patient</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Reschedule</th>
                </tr>
            </thead>
            <tbody>
    `;

    appointments.forEach(function(appointment, index) {
        if (appointment.status === "approved") {
            rescheduleAppointmentsHtml += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${appointment.patient}</td>
                    <td>${appointment.date}</td>
                    <td>${appointment.time}</td>
                    <td>${appointment.status}</td>
                    <td>
                        <button onclick="showRescheduleForm(${appointment.id})">Reschedule</button>
                    </td>
                </tr>
            `;
        }
    });

    rescheduleAppointmentsHtml += `
            </tbody>
        </table>
    `;

    content.innerHTML = rescheduleAppointmentsHtml;
}

// Function to show reschedule form for selected appointment
function showRescheduleForm(appointmentId) {
    var appointment = appointments.find(function(appointment) {
        return appointment.id === appointmentId;
    });

    if (appointment) {
        var rescheduleFormHtml = `
            <h2>Reschedule Appointment</h2>
            <p><strong>Patient:</strong> ${appointment.patient}</p>
            <p><strong>Date:</strong> ${appointment.date}</p>
            <p><strong>Time:</strong> ${appointment.time}</p>
            <label for="newDate">New Date:</label>
            <input type="date" id="newDate">
            <label for="newTime">New Time:</label>
            <input type="time" id="newTime">
            <button onclick="rescheduleAppointment(${appointment.id})">Reschedule</button>
        `;

        content.innerHTML = rescheduleFormHtml;
    }
}

// Function to reschedule an appointment
function rescheduleAppointment(appointmentId) {
    var appointment = appointments.find(function(appointment) {
        return appointment.id === appointmentId;
    });

    if (appointment) {
        var newDateInput = document.getElementById("newDate");
        var newTimeInput = document.getElementById("newTime");

        if (newDateInput && newTimeInput) {
            appointment.appointmentDate = newDateInput.value;
            appointment.time = newTimeInput.value;
            appointment.status = "rescheduled";
            showRescheduleAppointments(); // Refresh the content
        }
    }
}
function logout() {
    // Redirect to the login page
    window.location.href = "../../../auth/login/login.html";
    return false; // Prevent form submission (if it's inside a form)
}
// Initial content: reschedule appointments section
showRescheduleAppointments();
