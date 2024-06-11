require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
const adminRoutes = require('./routes/adminRoutes');
const chatbotRoutes = require('./routes/chatbot');
const authRoutes = require('./routes/authRoutes'); // Import authRoutes
const bodyParser = require('body-parser');
const multipleChoiceRoutes = require('./routes/multipleChoiceRoutes'); // Ensure the path is correct

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

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

// Admin routes
app.use('/api/admin', adminRoutes);

app.use('/api/multipleChoiceQuestions', multipleChoiceRoutes);

// Student routes
app.use('/api/students', studentRoutes);

// Instructor routes
app.use('/api/instructors', instructorRoutes);

// Chatbot routes
app.use('/api/chatbot', chatbotRoutes); // Ensure this line is correct

// Auth routes
app.use('/api/auth', authRoutes); // Add authRoutes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
