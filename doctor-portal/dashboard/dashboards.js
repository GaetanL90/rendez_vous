var content = document.getElementById("content");
var appointments = [
    { id: 1, patient: "Alice Johnson", date: "2023-08-20", appointmentDate: "2023-09-01", time: "10:00 AM", status: "pending", phone: "123-456-7890" },
    { id: 2, patient: "Bob Smith", date: "2023-08-22", appointmentDate: "2023-09-03", time: "2:30 PM", status: "pending", phone: "987-654-3210" },
    { id: 3, patient: "Eve Williams", date: "2023-08-25", appointmentDate: "2023-09-02", time: "9:15 AM", status: "rescheduled", phone: "555-123-4567" },
    // Add more appointments...
];

// Add event listeners to navigation links
var profileLink = document.getElementById("profileLink");
var appointmentsLink = document.getElementById("appointmentsLink");
var approveLink = document.getElementById("approveLink");
var rescheduleLink = document.getElementById("rescheduleLink");

profileLink.addEventListener("click", function(event) {
    event.preventDefault();
    showProfile();
});

appointmentsLink.addEventListener("click", function(event) {
    event.preventDefault();
    showAppointmentsHistory();
});

approveLink.addEventListener("click", function(event) {
    event.preventDefault();
    showApproveAppointments();
});

rescheduleLink.addEventListener("click", function(event) {
    event.preventDefault();
    showRescheduleAppointments();
});


// Display profile information
function showProfile() {
    content.innerHTML = `
        <h2>Doctor Profile</h2>
        <p><strong>Name:</strong> Dr. John Doe</p>
        <p><strong>Specialization:</strong> Cardiology</p>
        <p><strong>Sector:</strong> Kimihurura</p>
    `;
}

// Display appointments history
function showAppointmentsHistory() {
    var appointmentsHistoryHtml = `
        <h2>Appointments History</h2>
        <table border="1" cellpading="0" cellspacing="0">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>#ID</th>
                    <th>Patient</th>
                    <th>Applied Date</th>
                    <th>Appointment Date</th>
                    <th>Time</th>
                    <th>Status</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
    `;

    appointments.forEach(function(appointment, index) {
        appointmentsHistoryHtml += `
            <tr>
                <td>${index + 1}</td>
                <td>${appointment.id}</td>
                <td>${appointment.patient}</td>
                <td>${appointment.date}</td>
                <td>${appointment.appointmentDate}</td>
                <td>${appointment.time}</td>
                <td>${appointment.status}</td>
                <td>${appointment.phone}</td>
            </tr>
            
        `;
        
        
    });

    appointmentsHistoryHtml += `
            </tbody>
        </table>
    `;

    content.innerHTML = appointmentsHistoryHtml;
}
// Display approve appointments section
function showApproveAppointments() {
    var approveAppointmentsHtml = "<h2>Approve Appointments</h2><ul>";

    appointments.forEach(function(appointment) {
        if (appointment.status === "pending") {
            approveAppointmentsHtml += `
                <li>
                    <strong>Patient:</strong> ${appointment.patient} |
                    <strong>Date:</strong> ${appointment.date} |
                    <strong>Time:</strong> ${appointment.time} |
                    <button onclick="approveAppointment(${appointment.id})">Approve</button>
                    <button onclick="declineAppointment(${appointment.id})">Decline</button>
                    <button onclick="rescheduleAppointment(${appointment.id})">Reschedule</button>
                </li>
            `;
        }
    });

    approveAppointmentsHtml += "</ul>";
    content.innerHTML = approveAppointmentsHtml;
}

// Display reschedule appointments section
function showRescheduleAppointments() {
    var rescheduleAppointmentsHtml = "<h2>Reschedule Appointments</h2><ul>";

    appointments.forEach(function(appointment) {
        if (appointment.status === "rescheduled") {
            rescheduleAppointmentsHtml += `
                <li>
                    <strong>Patient:</strong> ${appointment.patient} |
                    <strong>Date:</strong> ${appointment.date} |
                    <strong>Time:</strong> ${appointment.time} |
                    <button onclick="approveReschedule(${appointment.id})">Approve Reschedule</button>
                    <button onclick="declineReschedule(${appointment.id})">Decline Reschedule</button>
                </li>
            `;
        }
    });

    rescheduleAppointmentsHtml += "</ul>";
    content.innerHTML = rescheduleAppointmentsHtml;
}

// Function to approve an appointment
function approveAppointment(appointmentId) {
    // Logic to approve appointment
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
    // Logic to decline appointment
    var appointment = appointments.find(function(appointment) {
        return appointment.id === appointmentId;
    });

    if (appointment) {
        appointment.status = "declined";
        showApproveAppointments(); // Refresh the content
    }
}

// Function to decline an appointment
function declineAppointment(appointmentId) {
    // Logic to decline appointment
    // Update UI accordingly
}

// Function to reschedule an appointment
function rescheduleAppointment(appointmentId) {
    // Logic to reschedule appointment
    var appointment = appointments.find(function(appointment) {
        return appointment.id === appointmentId;
    });

    if (appointment) {
        appointment.status = "rescheduled";
        showRescheduleAppointments(); // Refresh the content
    }
}

// Function to approve a rescheduled appointment
function approveReschedule(appointmentId) {
    // Logic to approve rescheduled appointment
    var appointment = appointments.find(function(appointment) {
        return appointment.id === appointmentId;
    });

    if (appointment) {
        appointment.status = "approved";
        showRescheduleAppointments(); // Refresh the content
    }
}

// Function to decline a rescheduled appointment
function declineReschedule(appointmentId) {
    // Logic to decline rescheduled appointment
    var appointment = appointments.find(function(appointment) {
        return appointment.id === appointmentId;
    });

    if (appointment) {
        appointment.status = "reschedule_declined";
        showRescheduleAppointments(); // Refresh the content
    }
}
// Initial content: profile information
showProfile();
