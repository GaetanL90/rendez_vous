const sqlite3 = require('sqlite3').verbose();

// Initialize the database (it will create the file if it doesn't exist)
const db = new sqlite3.Database('./rendezvous.db');

// Create users table
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT NOT NULL UNIQUE,
      phone TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL,
      role TEXT NOT NULL,
      national_id_photo TEXT,
      legal_documents TEXT,
      id_number TEXT
    )
  `);

  // Create appointments table (if needed)
  db.run(`
    CREATE TABLE IF NOT EXISTS appointments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      patient_id INTEGER,
      doctor_id INTEGER,
      appointment_date TEXT,
      status TEXT,
      FOREIGN KEY (patient_id) REFERENCES users(id),
      FOREIGN KEY (doctor_id) REFERENCES users(id)
    )
  `);
});

// Confirm that the database was initialized successfully
console.log('Database and tables created successfully!');
db.close();
