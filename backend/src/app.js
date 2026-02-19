const express = require('express');
const cors = require('cors');
const app = express();
const connectDB = require('./db/db');

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

module.exports = app;