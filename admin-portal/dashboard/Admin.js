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
            case "Transactions":
                content = generateTransactionsTable();
                break;
            case "Owners":
                content = generateOwnersTable();
                break;
            case "Users":
                content = generateUsersTable();
                break;
            default:
                content = "<p>Select a link to see its content.</p>";
        }
        return content;
    }

    function generateTransactionsTable() {
        const transactions = [
            { id: "#001", doctor: "Dr. John Doe", patient: "Alice Smith", appliedDate: "2023-08-20", transactionDate: "2023-08-25", time: "10:00 AM", doctorPhone: "+1234567890", patientPhone: "+9876543210", status: "Completed" },
            { id: "#002", doctor: "Dr. Jane Smith", patient: "Bob Johnson", appliedDate: "2023-08-21", transactionDate: "2023-08-26", time: "11:00 AM", doctorPhone: "+2345678901", patientPhone: "+8765432109", status: "Pending" },
            // Add more transaction objects...
        ];

        let table = `
            <h2>Transactions</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>#ID</th>
                        <th>Doctor</th>
                        <th>Patient</th>
                        <th>Applied Date</th>
                        <th>Transaction Date</th>
                        <th>Time</th>
                        <th>Doctor's Phone</th>
                        <th>Patient's Phone</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

        transactions.forEach((transaction, index) => {
            table += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${transaction.id}</td>
                    <td>${transaction.doctor}</td>
                    <td>${transaction.patient}</td>
                    <td>${transaction.appliedDate}</td>
                    <td>${transaction.transactionDate}</td>
                    <td>${transaction.time}</td>
                    <td>${transaction.doctorPhone}</td>
                    <td>${transaction.patientPhone}</td>
                    <td>${transaction.status}</td>
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

    function generateOwnersTable() {
        const owners = [
            { id: "#101", name: "Dr. Michael Smith", phone: "+3456789012", specialization: "Orthopedics", email: "michael@example.com" },
            { id: "#102", name: "Dr. Emily Johnson", phone: "+4567890123", specialization: "Dermatology", email: "emily@example.com" },
            // Add more owner objects...
        ];

        let table = `
            <h2>Owners</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>#ID</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Specialization</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
        `;

        owners.forEach((owner, index) => {
            table += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${owner.id}</td>
                    <td>${owner.name}</td>
                    <td>${owner.phone}</td>
                    <td>${owner.specialization}</td>
                    <td>${owner.email}</td>
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
            // Add more user objects...
        ];

        let table = `
            <h2>Users</h2>
            <table border="1">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>#ID</th>
                        <th>Name</th>
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
    window.location.href = "../login/login.html";
    return false; // Prevent form submission (if it's inside a form)
}
