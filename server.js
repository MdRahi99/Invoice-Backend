require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const reservationRoutes = require('./routes/reservations');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Port
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/reservations', reservationRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
