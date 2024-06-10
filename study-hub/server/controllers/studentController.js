const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Get student dashboard
exports.getDashboard = (req, res) => {
    res.send('Welcome to the Student Dashboard');
};

// Registering new student
exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, role: 'student' });
        await user.save();
        res.status(201).send('Student registered successfully');
    } catch (err) {
        res.status(400).send('Error registering student');
    }
};

// Get a student by ID
exports.getStudentById = async (req, res) => {
    try {
        const student = await User.findById(req.params.id).where('role').equals('student');
        if (!student) {
            return res.status(404).send('Student not found');
        }
        res.status(200).json(student);
    } catch (err) {
        res.status(400).send('Error getting student');
    }
};
