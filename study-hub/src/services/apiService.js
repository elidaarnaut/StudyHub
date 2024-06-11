import axios from 'axios';

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000'; // Set the base URL of your API

// Register a new student
export const registerStudent = async (studentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/students/register`, studentData); // Corrected path
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Error registering student');
    }
};

// Get the student dashboard
export const getStudentDashboard = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/students/dashboard`); // Corrected path
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Error fetching dashboard');
    }
};

// Get a student by ID
export const getStudentById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/students/${id}`); // Corrected path
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Error fetching student');
    }
};

export const sendMessageToChatbot = async (message) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/chatbot`, { message });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Error communicating with chatbot');
    }
};

// API service calls for instructors
export const registerInstructorStep1 = async (instructorData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/instructors/register-step1`, instructorData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Error registering instructor');
    }
};

// Complete instructor registration (Step 2)
export const completeInstructorRegistration = async (id, formData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/instructors/register-step2/${id}`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Error completing registration');
    }
};

// Register a new admin
export const registerAdmin = async (adminData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/admin/register`, adminData); // Corrected path
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Error registering admin');
    }
};

// Login function
export const login = async (userData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/auth/login`, userData);
        return response.data; // Ensure response includes token, userId, and role
    } catch (error) {
        throw error.response ? error.response.data : new Error('Error logging in');
    }
};

export const loginAdmin = async (adminData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/api/admin/login`, adminData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Error logging in as admin');
    }
};

// API service calls for multiple choice questions

// Fetch all multiple choice questions
export const fetchAllQuestions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/multipleChoiceQuestions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching all questions:', error);
    throw error;
  }
};

// Fetch a specific number of random multiple choice questions
export const fetchRandomQuestions = async (count) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/multipleChoiceQuestions/random/${count}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching ${count} random questions:`, error);
    throw error;
  }
};

// Fetch a multiple choice question by ID
export const fetchQuestionById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/multipleChoiceQuestions/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching question with ID ${id}:`, error);
    throw error;
  }
};

// Create a new multiple choice question
export const createQuestion = async (questionData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/multipleChoiceQuestions`, questionData);
    return response.data;
  } catch (error) {
    console.error('Error creating question:', error);
    throw error;
  }
};

// Update an existing multiple choice question by ID
export const updateQuestionById = async (id, questionData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/api/multipleChoiceQuestions/${id}`, questionData);
    return response.data;
  } catch (error) {
    console.error(`Error updating question with ID ${id}:`, error);
    throw error;
  }
};

// Delete a multiple choice question by ID
export const deleteQuestionById = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/api/multipleChoiceQuestions/${id}`);
  } catch (error) {
    console.error(`Error deleting question with ID ${id}:`, error);
    throw error;
  }
};
