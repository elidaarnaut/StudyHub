const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Student schema
const StudentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('Student', StudentSchema);
