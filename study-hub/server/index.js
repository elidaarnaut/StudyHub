require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const studentRoutes = require('./routes/studentRoutes');
//const chatbotRoutes = require('./routes/chatbot');

const app = express();
app.use(cors());
app.use(express.json());

// Log to confirm environment variables are loaded
//console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);

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

// Chatbot routes
//app.use('/chatbot', chatbotRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
