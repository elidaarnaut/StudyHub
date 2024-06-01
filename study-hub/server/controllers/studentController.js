const Student = require('../models/Student');

// Get student dashboard
exports.getDashboard = (req, res) => {
    // Assuming you have some logic to get the student's data
    res.send('Welcome to the Student Dashboard');
};

// Register a new student
exports.register = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const student = new Student({ name, email, password });
        await student.save();
        res.status(201).send('Student registered successfully');
    } catch (err) {
        res.status(400).send('Error registering student');
    }
};

// Get a student by ID
exports.getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).send('Student not found');
        }
        res.status(200).json(student);
    } catch (err) {
        res.status(400).send('Error getting student');
    }
};
