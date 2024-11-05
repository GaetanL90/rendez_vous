// doctor-portal/server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3004; // Unique port for doctor portal

// Serve static files
app.use(express.static(path.join(__dirname, 'dashboard')));

// Dashboard route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard/dashboard.html'));
});

app.listen(PORT, () => {
  console.log(`Doctor portal server running on http://localhost:${PORT}`);
});
