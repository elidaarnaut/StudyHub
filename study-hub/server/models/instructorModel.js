const mongoose = require('mongoose');

const instructorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
     cv: { type: String }, //checkt the file naming convention for future work
    education: { type: String },
    proof: { type: String },
    isVerified: { type: Boolean, default: false }
});

const Instructor = mongoose.model('Instructor', instructorSchema);

module.exports = Instructor;
