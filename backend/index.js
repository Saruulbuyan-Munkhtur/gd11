// Require necessary modules
const express = require('express');
const app = express();
const port = 3000;

// Define routes for products, orders, users, etc.
app.get('/products', (req, res) => {
    res.send('Get all products');
});

app.post('/products', (req, res) => {
    res.send('Create a new product');
});

app.put('/products/:id', (req, res) => {
    res.send(`Update product with id: ${req.params.id}`);
});

app.delete('/products/:id', (req, res) => {
    res.send(`Delete product with id: ${req.params.id}`);
});

// Set up a default route
app.get('/', (req, res) => {
    res.send('Welcome to the backend server!');
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
