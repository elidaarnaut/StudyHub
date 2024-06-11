const express = require('express');
const router = express.Router();
const instructorController = require('../controllers/instructorController');
const multer = require('multer');
const path = require('path');

//  we must use multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/')); //  upload directory where the cvs and ver are 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // i need to see more about file naming convention
    }
});

const upload = multer({ storage: storage });

// Get instructor dashboard
router.get('/dashboard', instructorController.getDashboard);

// Register new instructor (Step 1)
router.post('/register-step1', instructorController.registerStep1);

// Instructor registration (Step 2) with file uploads
router.post('/register-step2/:id', upload.fields([{ name: 'cv' }, { name: 'proof' }]), instructorController.registerStep2);

// Get an instructor by ID, needed for step 2 !!!!!!!!!!!!!!!!!!!!!!!!!1!
router.get('/:id', instructorController.getInstructorById);

module.exports = router;
