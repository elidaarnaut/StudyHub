const Instructor = require('../models/instructorModel');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');

// Get instructor dashboard
exports.getDashboard = (req, res) => {
    res.send('Welcome to the Instructor Dashboard');
};

// Registering new instructor (Step 1)
exports.registerStep1 = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const instructor = new Instructor({ name, email, password });
        await instructor.save();
        res.status(201).send({ message: 'Step 1 complete, proceed to verification', instructorId: instructor._id });
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
        const instructor = await Instructor.findById(id);
        if (!instructor) {
            return res.status(404).send('Instructor not found');
        }

        instructor.cv = cv;
        instructor.education = education;
        instructor.proof = proof;
        instructor.isVerified = true; 
        await instructor.save();

        // Send the CV via email
        await sendCVEmail(instructor.email, cv);

        res.status(200).send('Instructor registration complete');
    } catch (err) {
        res.status(400).send('Error completing registration');
    }
};

// Get an instructor by ID
exports.getInstructorById = async (req, res) => {
    try {
        const instructor = await Instructor.findById(req.params.id);
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
            user: 'your_email@gmail.com',
            pass: 'your_password',
        },
    });

    let mailOptions = {
        from: fromEmail,
        to: 'dalilasalcin@hotmail.com',
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
