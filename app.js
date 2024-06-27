const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Specify the directory where your .ejs files are located
app.set('views', path.join(__dirname, 'views'));

// Define a route for the root path
app.get('/', (req, res) => {
    res.render('yu');  // This matches the name of your ejs file (yu.ejs)
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
