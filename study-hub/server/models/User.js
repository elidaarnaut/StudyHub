const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
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
    },
    role: {
        type: String,
        enum: ['student', 'instructor', 'admin'],
        required: true
    },
    // Fields specific to instructors
    education: {
        type: String,
        required: function() { return this.role === 'instructor'; }
    },
    cv: {
        type: String,
        required: function() { return this.role === 'instructor'; }
    },
    proof: {
        type: String,
        required: function() { return this.role === 'instructor'; }
    },
    isVerified: {
        type: Boolean,
        default: false,
        required: function() { return this.role === 'instructor'; }
    }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);
