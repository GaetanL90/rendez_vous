var content = document.getElementById("content");
var sortByDropdown = document.getElementById("sortBy");

// Dummy data for appointments
var appointments = [
    { id: 101, patient: "Alice Johnson", appointmentDate: "2023-09-01", rescheduleDate: "2023-10-01", time: "10:00 AM", status: "approved" },
    { id: 102, patient: "Bob Smith", appointmentDate: "2023-09-03", rescheduleDate: "2023-12-03", time: "2:30 PM", status: "declined" },
    { id: 102, patient: "Eve Williams", appointmentDate: "2023-09-02", rescheduleDate: "2023-11-02", time: "9:15 AM", status: "pending" },
    { id: 104, patient: "Grace Lee", appointmentDate: "2023-08-21", rescheduleDate: "2023-09-01", time: "3:45 PM", status: "pending" },
    { id: 105, patient: "John Doe", appointmentDate: "2023-09-15", rescheduleDate: "2023-12-10", time: "11:30 AM", status: "approved" },
    { id: 106, patient: "Jane Smith", appointmentDate: "2022-09-10", rescheduleDate: "2023-07-10", time: "1:45 PM", status: "declined" },
    { id: 107, patient: "Mike Johnson", appointmentDate: "2022-09-10", rescheduleDate: "2023-09-05", time: "10:00 AM", status: "pending" },
    // Add more appointments...
];

// Function to display approve appointments section
function showApproveAppointments() {
    var sortedAppointments = sortAppointments(appointments, sortByDropdown.value);

    var approveAppointmentsHtml = `
        <h2>Approve Appointments</h2>
        <table border="1" cellpadding="0" cellspacing="0">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>ID</th>
                    <th>Patient</th>
                    <th>Appointment Date</th>
                    <th>Reschedule Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
    `;

    var rowNumber = 0; // Initialize row number counter

    sortedAppointments.forEach(function(appointment, index) {
        if (appointment.status === "pending") {
            rowNumber++; // Increment row number for each pending appointment

            approveAppointmentsHtml += `
                <tr>
                    <td>${rowNumber}</td> <!-- Display the row number -->
                    <td>${appointment.id}</td>
                    <td>${appointment.patient}</td>
                    <td>${appointment.appointmentDate}</td>
                    <td>${appointment.rescheduleDate}</td>
                    <td>${appointment.time}</td>
                    <td>${appointment.status}</td>
                    <td>
                        <button onclick="approveAppointment(${appointment.id})">Approve</button>
                        <button onclick="declineAppointment(${appointment.id})">Decline</button>
                        <button onclick="showRescheduleForm(${appointment.id})">Reschedule</button>
                    </td>
                </tr>
            `;
        }
    });

    approveAppointmentsHtml += `
            </tbody>
        </table>
    `;

    content.innerHTML = approveAppointmentsHtml;
}
  

// Function to sort appointments based on the selected field
function sortAppointments(appointments, field) {
    return appointments.slice().sort(function(a, b) {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
    });
}

// Function to approve an appointment
function approveAppointment(appointmentId) {
    var appointment = appointments.find(function(appointment) {
        return appointment.id === appointmentId;
    });

    if (appointment) {
        appointment.status = "approved";
        showApproveAppointments(); // Refresh the content
    }
}

// Function to decline an appointment
function declineAppointment(appointmentId) {
    var appointment = appointments.find(function(appointment) {
        return appointment.id === appointmentId;
    });

    if (appointment) {
        appointment.status = "declined";
        showApproveAppointments(); // Refresh the content
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
function logout() {
    // Redirect to the login page
    window.location.href = "../../../auth/login/login.html";
    return false; // Prevent form submission (if it's inside a form)
}

// Add event listener to the sort dropdown
sortByDropdown.addEventListener("change", function() {
    showApproveAppointments();
});

// Initial content: approve appointments section
showApproveAppointments();
