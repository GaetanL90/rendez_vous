// Function to display profile information
function showProfile() {
    const content = document.getElementById("content");
    content.innerHTML = `
        <h2>Doctor Profile</h2>
        <p><strong>Name:</strong> Dr. John Doe</p>
        <p><strong>Specialization:</strong> Cardiology</p>
        <p><strong>Sector:</strong> Kimihurura</p>
    `;
}

// Function to display appointments history
function showAppointmentsHistory() {
    const content = document.getElementById("content");
    const appointments = [
        { id: 1, patient: "Alice Johnson", date: "2023-08-20", appointmentDate: "2023-09-01", time: "10:00 AM", status: "pending", phone: "123-456-7890" },
        { id: 2, patient: "Bob Smith", date: "2023-08-22", appointmentDate: "2023-09-03", time: "2:30 PM", status: "pending", phone: "987-654-3210" },
        { id: 3, patient: "Eve Williams", date: "2023-08-25", appointmentDate: "2023-09-02", time: "9:15 AM", status: "rescheduled", phone: "555-123-4567" },
        // Add more appointments...
    ];

    let appointmentsHistoryHtml = `
        <h2>Appointments History</h2>
        <table border="1" cellpadding="0" cellspacing="0">
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

// Function to display approve appointments section
function showApproveAppointments() {
    const content = document.getElementById("content");
    const appointments = [
        { id: 1, patient: "Alice Johnson", date: "2023-08-20", time: "10:00 AM", status: "pending" },
        { id: 2, patient: "Bob Smith", date: "2023-08-22", time: "2:30 PM", status: "pending" },
        { id: 3, patient: "Eve Williams", date: "2023-08-25", time: "9:15 AM", status: "rescheduled" },
        // Add more appointments...
    ];

    let approveAppointmentsHtml = `
        <h2>Approve Appointments</h2>
        <ul>
    `;

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

    approveAppointmentsHtml += `
        </ul>
    `;

    content.innerHTML = approveAppointmentsHtml;
}

// Function to display reschedule appointments section
function showRescheduleAppointments() {
    const content = document.getElementById("content");
    const appointments = [
        { id: 1, patient: "Alice Johnson", date: "2023-08-20", time: "10:00 AM", status: "rescheduled" },
        { id: 2, patient: "Bob Smith", date: "2023-08-22", time: "2:30 PM", status: "rescheduled" },
        { id: 3, patient: "Eve Williams", date: "2023-08-25", time: "9:15 AM", status: "rescheduled" },
        // Add more appointments...
    ];

    let rescheduleAppointmentsHtml = `
        <h2>Reschedule Appointments</h2>
        <ul>
    `;

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

    rescheduleAppointmentsHtml += `
        </ul>
    `;

    content.innerHTML = rescheduleAppointmentsHtml;
}

// Function to approve an appointment
function approveAppointment(appointmentId) {
    // Logic to approve appointment
    // Update the appointment status
    showApproveAppointments(); // Refresh the content
}

// Function to decline an appointment
function declineAppointment(appointmentId) {
    // Logic to decline appointment
    // Update the appointment status
    showApproveAppointments(); // Refresh the content
}

// Function to reschedule an appointment
function rescheduleAppointment(appointmentId) {
    // Logic to reschedule appointment
    // Update the appointment status
    showRescheduleAppointments(); // Refresh the content
}

// Function to approve a rescheduled appointment
function approveReschedule(appointmentId) {
    // Logic to approve rescheduled appointment
    // Update the appointment status
    showRescheduleAppointments(); // Refresh the content
}

// Function to decline a rescheduled appointment
function declineReschedule(appointmentId) {
    // Logic to decline rescheduled appointment
    // Update the appointment status
    showRescheduleAppointments(); // Refresh the content
}

// Initial content: profile information
showProfile();
