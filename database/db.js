// database.js

const mysql = require('mysql2');

// Create a connection to the XAMPP MySQL database using default credentials
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Default MySQL username in XAMPP
  password: '', // Default MySQL password in XAMPP (empty by default)
  database: 'rendezvous' // Ensure your database is named 'rendezvous'
});

// Establish the connection
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the MySQL database');
});

module.exports = connection;
