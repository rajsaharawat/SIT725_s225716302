// Load Express
const express = require('express');
const app = express();

// Choose a port for your server
const PORT = 3000;

// Basic GET endpoint
app.get('/', (req, res) => {
    res.send('Hello! Your Express server is running successfully 🎉');
});

// Example endpoint: add two numbers
app.get('/add', (req, res) => {
    const x = parseFloat(req.query.x);
    const y = parseFloat(req.query.y);

    if (isNaN(x) || isNaN(y)) {
        return res.status(400).send('Please provide valid numbers as x and y.');
    }

    const result = x + y;
    res.send(`The sum is: ${result}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
