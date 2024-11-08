const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Load environment variables
require('dotenv').config();
const JWT_SECRET = process.env.JWT_SECRET;

// Signup route
// server/routes/auth.js

router.post("/signup", async (req, res) => {
    const { email, phone, password, role, idNumber } = req.body;
    const idCard = req.files?.idCard;
    const legalDocuments = req.files?.legalDocuments;

    try {
        if (role === "admin" && (await User.exists({ role: "admin" }))) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        const user = new User({ email, phone, password, role, idNumber });
        if (idCard) user.idCard = idCard; // store file paths
        if (legalDocuments) user.legalDocuments = legalDocuments;

        await user.save();
        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error registering user" });
    }
});
  
// Login route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate token with user's role
    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: '1h',
    });
    res.json({ token, role: user.role });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
});

module.exports = router;
// server/routes/auth.js


