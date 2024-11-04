var historyTable = document.getElementById("historyTable");
var appointments = [
    { id: "123", doctor: "Dr. Smith", phone: "123-456-7890", appliedDate: "2023-08-01", appointmentDate: "2023-09-01", status: "Active" },
    { id: "127", doctor: "Dr. Johnson", phone: "987-654-3210", appliedDate: "2023-08-15", appointmentDate: "2023-09-15", status: "Pending" },
    { id: "125", doctor: "Dr. Gaetan", phone: "555-555-5555", appliedDate: "2023-09-01", appointmentDate: "2023-10-01", status: "Concluded"},
    { id: "126", doctor: "Dr. Gaetan", phone: "555-555-5555", appliedDate: "2023-09-01", appointmentDate: "2023-10-01", status: "Deleted"},
    { id: "133", doctor: "Dr. Smithson", phone: "123-456-1111", appliedDate: "2022-08-01", appointmentDate: "2023-12-01", status: "Active" },

    // ... add more appointment data
];

function populateTable() {
    historyTable.innerHTML = ""; // Clear the table

    // Add table headings
    var headerRow = historyTable.insertRow(0);
    var headings = ["No.", "#ID", "Doctor", "Phone", "Applied Date", "Appointment Date", "Status"];
    headings.forEach(function(heading) {
        var th = document.createElement("th");
        th.textContent = heading;
        headerRow.appendChild(th);
    });

    appointments.forEach(function(appointment, index) {
        var row = historyTable.insertRow(index + 1);
        var noCell = row.insertCell(0);
        var idCell = row.insertCell(1);
        var doctorCell = row.insertCell(2);
        var phoneCell = row.insertCell(3);
        var appliedDateCell = row.insertCell(4);
        var appointmentDateCell = row.insertCell(5);
        var statusCell = row.insertCell(6);

        noCell.textContent = index + 1;
        idCell.textContent = appointment.id;
        doctorCell.textContent = appointment.doctor;
        phoneCell.textContent = appointment.phone;
        appliedDateCell.textContent = appointment.appliedDate;
        appointmentDateCell.textContent = appointment.appointmentDate;
        statusCell.textContent = appointment.status;
    });
}

function sortAppointments(sortBy) {
    appointments.sort(function(a, b) {
        return a[sortBy].localeCompare(b[sortBy]);
    });
    populateTable();
}

document.getElementById("sortBy").addEventListener("change", function() {
    var sortBy = this.value;
    sortAppointments(sortBy);
});
function logout() {
    // Redirect to the login page
    window.location.href = "../../auth/login/login.html";
    return false; // Prevent form submission (if it's inside a form)
}
// Initial population and sorting
populateTable();
sortAppointments("status"); // Default sorting by status
