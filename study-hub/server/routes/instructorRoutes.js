const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorController');
const multer = require('multer');
const path = require('path');

// Multer storage configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/')); // Upload directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Unique file naming convention
    }
});

const upload = multer({ storage: storage });

// Get instructor dashboard
router.get('/dashboard', instructorController.getDashboard);

// Register new instructor (Step 1)
router.post('/register-step1', instructorController.registerStep1);

// Instructor registration (Step 2) with file uploads
router.post('/register-step2/:id', upload.fields([{ name: 'cv' }, { name: 'proof' }]), instructorController.registerStep2);

// Get an instructor by ID
router.get('/:id', instructorController.getInstructorById);

module.exports = router;
