import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000'; // Set the base URL of your API

// Register a new student
export const registerStudent = async (studentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/students/register`, studentData);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Error registering student');
    }
};

// Get the student dashboard
export const getStudentDashboard = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/students/dashboard`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Error fetching dashboard');
    }
};

// Get a student by ID
export const getStudentById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/students/${id}`);
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Error fetching student');
    }
};

// Send message to chatbot
export const sendMessageToChatbot = async (message) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/chatbot`, { message });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : new Error('Error communicating with chatbot');
    }
};
