// Function to display appointments history
function showAppointmentsHistory() {
    const content = document.getElementById("content");
    var appointments = [
        { id: 1, patient: "Alice Johnson", date: "2023-08-20", appointmentDate: "2023-09-01", time: "10:00 AM", status: "pending", phone: "123-456-7890" },
        { id: 2, patient: "Bob Smith", date: "2023-08-22", appointmentDate: "2023-09-03", time: "2:30 PM", status: "pending", phone: "987-654-3210" },
        { id: 3, patient: "Eve Williams", date: "2023-08-25", appointmentDate: "2023-09-02", time: "9:15 AM", status: "rescheduled", phone: "555-123-4567" },
        { id: 4, patient: "Grace Lee", date: "2023-08-30", appointmentDate: "2023-09-05", time: "3:45 PM", status: "pending", phone: "111-222-3333" },
        { id: 5, patient: "John Doe", date: "2023-09-01", appointmentDate: "2023-09-10", time: "11:30 AM", status: "approved", phone: "999-888-7777" },
        { id: 6, patient: "Jane Smith", date: "2023-09-05", appointmentDate: "2023-09-12", time: "1:45 PM", status: "declined", phone: "444-555-6666" },
        { id: 7, patient: "Mike Johnson", date: "2023-09-08", appointmentDate: "2023-09-08", time: "10:00 AM", status: "rescheduled", phone: "777-999-8888" },
        { id: 8, patient: "Emily Brown", date: "2023-09-12", appointmentDate: "2023-09-15", time: "4:30 PM", status: "pending", phone: "666-444-5555" },
        { id: 9, patient: "David Wilson", date: "2023-09-15", appointmentDate: "2023-09-18", time: "2:00 PM", status: "pending", phone: "555-666-7777" },
        { id: 10, patient: "Olivia Davis", date: "2023-09-18", appointmentDate: "2023-09-22", time: "9:00 AM", status: "pending", phone: "222-111-4444" },
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

    appointments.forEach(function (appointment, index) {
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

    // Add event listener to the sort dropdown
    const sortByDropdown = document.getElementById("sortBy");
    sortByDropdown.addEventListener("change", function () {
        const sortedAppointments = sortAppointments(appointments, sortByDropdown.value);
        displaySortedAppointments(sortedAppointments);
    });
}

function sortAppointments(appointments, field) {
    return appointments.slice().sort(function (a, b) {
        if (a[field] < b[field]) return -1;
        if (a[field] > b[field]) return 1;
        return 0;
    });
}

function displaySortedAppointments(sortedAppointments) {
    const content = document.getElementById("content");
    let sortedAppointmentsHtml = `
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

    sortedAppointments.forEach(function (appointment, index) {
        sortedAppointmentsHtml += `
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

    sortedAppointmentsHtml += `
            </tbody>
        </table>
    `;

    content.innerHTML = sortedAppointmentsHtml;
}
function logout() {
    // Redirect to the login page
    window.location.href = "../../../auth/login/login.html";
    return false; // Prevent form submission (if it's inside a form)
}
// Initial content: appointments history
showAppointmentsHistory();
