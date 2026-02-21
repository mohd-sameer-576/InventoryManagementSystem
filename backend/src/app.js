const express = require('express');
const authRoutes = require('./routes/user.router');
const productRoutes = require('./routes/product.router');
const cors = require('cors');
const app = express();
const connectDB = require('./db/db');

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
// app.use('/api/products', productRoutes);

module.exports = app;