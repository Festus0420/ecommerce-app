const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// Simple request logger middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} [${new Date().toISOString()}]`);
  next();
});

app.use(cors());
app.use(express.json());

// route
app.get('/', (req, res) => {
  res.send('Welcome to the E-commerce API!');
});

// products route 
app.get('/api/products', (req, res) => {
  res.json([
    {
      _id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      description: "High-quality wireless headphones with noise cancellation",
      image: "/images/Headphone.PNG"
    },
    {
      _id: 2,
      name: "Smartwatch",
      price: 199.99,
      description: "Feature-rich smartwatch with health tracking",
      image: "/images/Smartwatch.PNG"
    },
    {
      _id: 3,
      name: "Laptop",
      price: 999.99,
      description: "Powerful laptop for work and gaming",
      image: "/images/Laptop.PNG"
    },
    {
      _id: 4,
      name: "Smartphone",
      price: 699.99,
      description: "Latest smartphone with advanced camera",
      image: "/images/Smartphone.jpg"
    }
  ]);
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;