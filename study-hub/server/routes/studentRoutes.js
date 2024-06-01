const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

// Route for student dashboard
router.get('/dashboard', studentController.getDashboard);

// Route for registering a new student
router.post('/register', studentController.register);

// Route for getting a student by ID
router.get('/:id', studentController.getStudentById);

module.exports = router;
