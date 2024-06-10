const User = require('../models/User');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');
const path = require('path');

// Get instructor dashboard
exports.getDashboard = (req, res) => {
    res.send('Welcome to the Instructor Dashboard');
};

// Registering new instructor (Step 1)
exports.registerStep1 = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ name, email, password: hashedPassword, role: 'instructor' });
        await user.save();
        res.status(201).send({ message: 'Step 1 complete, proceed to verification', userId: user._id });
    } catch (err) {
        res.status(400).send('Error registering instructor');
    }
};

// Completing instructor registration (Step 2)
exports.registerStep2 = async (req, res) => {
    const { id } = req.params;
    const { education } = req.body;
    const cv = req.files['cv'][0].path;
    const proof = req.files['proof'][0].path;

    try {
        const user = await User.findById(id);
        if (!user) {
            return res.status(404).send('Instructor not found');
        }

        user.cv = cv;
        user.education = education;
        user.proof = proof;
        user.isVerified = true;
        await user.save();

        await sendCVEmail(user.email, cv);

        res.status(200).send('Instructor registration complete');
    } catch (err) {
        res.status(400).send('Error completing registration');
    }
};

// Get an instructor by ID
exports.getInstructorById = async (req, res) => {
    try {
        const instructor = await User.findById(req.params.id).where('role').equals('instructor');
        if (!instructor) {
            return res.status(404).send('Instructor not found');
        }
        res.status(200).json(instructor);
    } catch (err) {
        res.status(400).send('Error getting instructor');
    }
};

// Function to send the CV via email
async function sendCVEmail(fromEmail, cvPath) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'example@gmail.com',
            pass: 'password',
        },
    });

    let mailOptions = {
        from: fromEmail,
        to: 'recipient@example.com',
        subject: 'Instructor CV Submission',
        text: 'An instructor has submitted their CV. Please find the attached CV.',
        attachments: [
            {
                filename: path.basename(cvPath),
                path: cvPath
            }
        ]
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('CV email sent successfully');
    } catch (error) {
        console.error('Error sending CV email:', error);
    }
}
