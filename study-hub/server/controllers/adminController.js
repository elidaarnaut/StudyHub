const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Get admin dashboard
exports.getDashboard = (req, res) => {
    res.send('Welcome to the Admin Dashboard');
};

// Registering new admin
exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, role: 'admin' });
        await user.save();
        res.status(201).send('Admin registered successfully');
    } catch (err) {
        res.status(400).send('Error registering admin');
    }
};

// Get an admin by ID
exports.getAdminById = async (req, res) => {
    try {
        const admin = await User.findById(req.params.id).where('role').equals('admin');
        if (!admin) {
            return res.status(404).send('Admin not found');
        }
        res.status(200).json(admin);
    } catch (err) {
        res.status(400).send('Error getting admin');
    }
};
