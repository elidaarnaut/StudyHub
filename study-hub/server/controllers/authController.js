const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.registerUser = async (req, res) => {
    try {
        const { email, password, role } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'Email already in use' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user with role
        const newUser = new User({ email, password: hashedPassword, role });

        // Save user to the database
        await newUser.save();

        // Generate JWT token
        const token = jwt.sign(
            { user: { id: newUser._id, email: newUser.email, role: newUser.role } },
            process.env.JWT_SECRET,
            { expiresIn: '48h' }
        );

        // Return token and user ID
        res.status(201).json({ token, userId: newUser._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Find the user by email
        const user = await User.findOne({ email });

        // Check if user exists
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Check if password is valid
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { user: { id: user._id, email: user.email, role: user.role } },
            process.env.JWT_SECRET,
            { expiresIn: '48h' }
        );

        // Return token, user ID, and role
        res.json({ token, user: { id: user._id, email: user.email, role: user.role } });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
};
