// Adrian Curammeng Peronal Website/Portfolio
// server.js

// Importing Modules
const express = require('express');
const path = require('path');

// Express Application
const app = express();  

// Server Port
const PORT = 3000;

// Homepage redirect
app.get('/', (req, res) => { res.redirect('/home'); } );

// Homepage GET Route
app.get('/home', (req, res) => { res.sendFile(path.join(__dirname, '/views/index.html')); });

// About GET Route
app.get('/about', (req, res) => { res.sendFile(path.join(__dirname, '/views/about.html')); });

// Projects GET Route
app.get('/projects', (req, res) => { res.sendFile(path.join(__dirname, '/views/projects.html')); });

// Error 404 Page
app.use((req, res, next) =>
{
    res.status(404).sendFile(path.join(__dirname, '/views/error404.html'));
})

// Starts Server
app.listen(PORT, (error) =>
{
    // Prints error
    if (error) 
    {
        console.log(error);
    }
    else
    {
        // Prints Server Port
        console.log(`Server successfully started on ${PORT}`);
    }
});