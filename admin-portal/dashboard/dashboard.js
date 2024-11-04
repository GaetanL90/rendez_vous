document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".decor");
    const contentContainer = document.getElementById("content");

    // Load the default content on page load
    const defaultContent = getCorrespondingContent("Manage account");
    contentContainer.innerHTML = defaultContent;

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const linkText = link.textContent.trim();
            const content = getCorrespondingContent(linkText);
            contentContainer.innerHTML = content;
        });
    });

    function getCorrespondingContent(linkText) {
        let content = "";
        switch (linkText) {
            case "Manage account":
                content = `
                    <h2>Manage Account</h2>
                    <p>Main personal account information and options to change details.</p>
                    <p>Form to update password, phone number, email, etc.</p>
                `;
                break;
            case "Appointments":
                content = generateAppointmentsTable();
                break;
            case "Doctors":
                content = generateDoctorsTable();
                break;
            case "Users":
                content = generateUsersTable();
                break;
            default:
                content = "<p>Select a link to see its content.</p>";
        }
        return content;
    }

    function generateAppointmentsTable() {
        const appointments = [
            { id: "#123", doctor: "Dr. John Doe", patient: "Alice Smith", appliedDate: "2023-08-20", appointmentDate: "2023-08-25", time: "10:00 AM", doctorPhone: "+1234567890", patientPhone: "+9876543210", status: "Confirmed" },
            { id: "#123", doctor: "Dr. John Doe", patient: "Alice Smith", appliedDate: "2023-08-20", appointmentDate: "2023-08-25", time: "10:00 AM", doctorPhone: "+1234567890", patientPhone: "+9876543210", status: "Confirmed" },
            { id: "#123", doctor: "Dr. John Doe", patient: "Alice Smith", appliedDate: "2023-08-20", appointmentDate: "2023-08-25", time: "10:00 AM", doctorPhone: "+1234567890", patientPhone: "+9876543210", status: "Confirmed" },
            { id: "#123", doctor: "Dr. John Doe", patient: "Alice Smith", appliedDate: "2023-08-20", appointmentDate: "2023-08-25", time: "10:00 AM", doctorPhone: "+1234567890", patientPhone: "+9876543210", status: "Confirmed" },
            { id: "#123", doctor: "Dr. John Doe", patient: "Alice Smith", appliedDate: "2023-08-20", appointmentDate: "2023-08-25", time: "10:00 AM", doctorPhone: "+1234567890", patientPhone: "+9876543210", status: "Confirmed" },
            { id: "#123", doctor: "Dr. John Doe", patient: "Alice Smith", appliedDate: "2023-08-20", appointmentDate: "2023-08-25", time: "10:00 AM", doctorPhone: "+1234567890", patientPhone: "+9876543210", status: "Confirmed" },
            { id: "#123", doctor: "Dr. John Doe", patient: "Alice Smith", appliedDate: "2023-08-20", appointmentDate: "2023-08-25", time: "10:00 AM", doctorPhone: "+1234567890", patientPhone: "+9876543210", status: "Confirmed" },
            { id: "#123", doctor: "Dr. John Doe", patient: "Alice Smith", appliedDate: "2023-08-20", appointmentDate: "2023-08-25", time: "10:00 AM", doctorPhone: "+1234567890", patientPhone: "+9876543210", status: "Confirmed" },
            
            // Add more appointment objects...
        ];

        let table = `
            <h2>Appointments</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>#ID</th>
                        <th>Doctor</th>
                        <th>Patient</th>
                        <th>Applied Date</th>
                        <th>Appointment Date</th>
                        <th>Time</th>
                        <th>Doctor's Phone</th>
                        <th>Patient's Phone</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

        appointments.forEach((appointment, index) => {
            table += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${appointment.id}</td>
                    <td>${appointment.doctor}</td>
                    <td>${appointment.patient}</td>
                    <td>${appointment.appliedDate}</td>
                    <td>${appointment.appointmentDate}</td>
                    <td>${appointment.time}</td>
                    <td>${appointment.doctorPhone}</td>
                    <td>${appointment.patientPhone}</td>
                    <td>${appointment.status}</td>
                    <td><button>Delete</button><button>Update</button></td>
                </tr>
            `;
        });

        table += `
                </tbody>
            </table>
        `;

        return table;
    }

    function generateDoctorsTable() {
        const doctors = [
            { id: "#456", name: "Dr. Jane Smith", phone: "+2345678901", specialization: "Cardiology", email: "jane@example.com" },
            // Add more doctor objects...
        ];

        let table = `
            <h2>Doctors</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>#ID</th>
                        <th>Names</th>
                        <th>Phone</th>
                        <th>Specialization</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

        doctors.forEach((doctor, index) => {
            table += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${doctor.id}</td>
                    <td>${doctor.name}</td>
                    <td>${doctor.phone}</td>
                    <td>${doctor.specialization}</td>
                    <td>${doctor.email}</td>
                    <td><button>Delete</button><button>Update</button></td>
                </tr>
            `;
        });

        table += `
                </tbody>
            </table>
        `;

        return table;
    }

    function generateUsersTable() {
        const users = [
            { id: "#789", name: "Alice Johnson", phone: "+3456789012", role: "User", email: "alice@example.com", lastLogin: "2023-08-18 08:30 AM" },
            // Add more user objects...
        ];

        let table = `
            <h2>Users</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>#ID</th>
                        <th>Names</th>
                        <th>Phone</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Last Login</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

        users.forEach((user, index) => {
            table += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.phone}</td>
                    <td>${user.role}</td>
                    <td>${user.email}</td>
                    <td>${user.lastLogin}</td>
                    <td><button>Delete</button><button>Update</button></td>
                </tr>
            `;
        });

        table += `
                </tbody>
            </table>
        `;

        return table;
    }
});

function logout() {
    // Redirect to the login page
    window.location.href = "../../auth/login/login.html";
    return false; // Prevent form submission (if it's inside a form)
}