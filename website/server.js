const express = require('express');
const path = require('path');

const app = express();
const PORT = 3030; // You can use any available port

// Serve static files from the "home" directory
app.use(express.static(path.join(__dirname, 'home')));
app.use(express.static(path.join(__dirname, '../website')));


// Serve static files for website and auth pages

app.use(express.static(path.join(__dirname, '../auth')));



// Route to serve the homepage
app.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, 'home/home.html'));
});


// Route to serve the index page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to serve the about us page
app.get('/about-us', (req, res) => {
    res.sendFile(path.join(__dirname, 'about-us/about-us.html'));
});

// Route to serve the services page
app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'services/services.html')); // Adjusted path as necessary

});

// Authentication routes
app.get('/auth/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../auth/login/login.html'));
});

app.get('/auth/signup', (req, res) => {
    res.sendFile(path.join(__dirname, '../auth/signup/signup.html'));
});

app.listen(PORT, () => {
    console.log(`Website server is running on http://localhost:${PORT}`);
});
