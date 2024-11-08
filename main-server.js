// main-server.js
const express = require('express');
const bcrypt = require('bcrypt');
const db = require('./database/db');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('auth'));

// Route: Signup endpoint
app.post('/auth/signup', async (req, res) => {
  const { email, phone, password, confirmPassword, role, idNumber, idCardPhoto, legalDocs } = req.body;

  // Check if password and confirmPassword match
  if (password !== confirmPassword) {
    return res.status(400).send('Passwords do not match');
  }

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Begin transaction to add user to both users and role-specific table
  db.beginTransaction((err) => {
    if (err) return res.status(500).send('Transaction Error');

    // Insert into role-specific table and users table
    let roleInsertQuery = '';
    let roleValues = [email, phone, hashedPassword];

    if (role === 'patient') {
      roleInsertQuery = 'INSERT INTO patients (email, phone, password) VALUES (?, ?, ?)';
    } else if (role === 'doctor') {
      roleInsertQuery = 'INSERT INTO doctors (email, phone, password, id_number, id_card_photo, legal_docs) VALUES (?, ?, ?, ?, ?, ?)';
      roleValues.push(idNumber, idCardPhoto, legalDocs);
    } else if (role === 'admin') {
      roleInsertQuery = 'INSERT INTO admin (email, phone, password) VALUES (?, ?, ?)';
    }

    // Insert into the role-specific table
    db.query(roleInsertQuery, roleValues, (err, results) => {
      if (err) {
        return db.rollback(() => res.status(500).send('Role-specific insert error'));
      }

      // Insert into users table
      const userInsertQuery = 'INSERT INTO users (email, phone, role, password) VALUES (?, ?, ?, ?)';
      db.query(userInsertQuery, [email, phone, role, hashedPassword], (err, results) => {
        if (err) {
          return db.rollback(() => res.status(500).send('User insert error'));
        }

        db.commit((err) => {
          if (err) {
            return db.rollback(() => res.status(500).send('Commit error'));
          }
          res.status(201).send('Signup successful');
        });
      });
    });
  });
});

// Route: Login endpoint
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if user exists
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err || results.length === 0) {
      return res.status(400).send('User not found');
    }

    const user = results[0];
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).send('Invalid credentials');
    }

    // Redirect based on user role
    if (user.role === 'patient') {
      res.redirect('/patient-portal');
    } else if (user.role === 'doctor') {
      res.redirect('/doctor-portal');
    } else if (user.role === 'admin') {
      res.redirect('/admin-portal');
    } else {
      res.status(400).send('Invalid role');
    }
  });
});

// Proxy routes to each package
const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/website', createProxyMiddleware({ target: 'http://localhost:3030', changeOrigin: true }));
app.use('/patient-portal', createProxyMiddleware({ target: 'http://localhost:3002', changeOrigin: true }));
app.use('/doctor-portal', createProxyMiddleware({ target: 'http://localhost:3003', changeOrigin: true }));
app.use('/admin-portal', createProxyMiddleware({ target: 'http://localhost:3004', changeOrigin: true }));

// Start the main server
app.listen(PORT, () => {
  console.log(`Main server running on http://localhost:${PORT}`);
});
