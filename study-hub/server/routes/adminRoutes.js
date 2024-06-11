const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController'); // Ensure the correct path and correct export

// Route for registering a new admin
router.post('/register', adminController.register);

// Route for admin dashboard
router.get('/dashboard', adminController.getDashboard);

// Route for getting an admin by ID
router.get('/:id', adminController.getAdminById);

module.exports = router;
