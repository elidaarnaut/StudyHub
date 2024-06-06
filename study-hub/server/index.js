require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
const chatbotRoutes = require('./routes/chatbot');

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Ensure this is before route definitions

// Connecting to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    bufferCommands: false,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Student routes
app.use('/students', studentRoutes);

// Instructor routes
app.use('/instructors', instructorRoutes);

// Chatbot routes
app.use('/chatbot', chatbotRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
