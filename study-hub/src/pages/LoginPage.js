import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SignUpImage from '../assets/3DSignUp.svg';
import { registerStudent } from '../services/apiService';
import 'bootstrap/dist/css/bootstrap.min.css';  

function LoginPage() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate(); // Use useNavigate for navigation

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await registerStudent(inputs);
            setSuccess('Student registered successfully');
            setError('');
            navigate('/dashboardStudent'); // Redirect to the dashboard
        } catch (error) {
            setError(error.message || 'Error registering student');
            setSuccess('');
        }
    };

    const inputStyle = {
        padding: '15px',
        fontSize: '16px',
        width: '100%',  
        borderRadius: '12px'
    };

    const linkStyle = {
        color: '#D03D18', 
        textDecoration: 'none',
        fontWeight: '600' 
    };

    return (
        <Container fluid className="min-vh-100 d-flex" style={{ backgroundColor: '#2D4263' }}>
            <Row className="w-100 align-items-center">
                <Col xs={12} md={6} className="d-flex justify-content-center p-4">
                    <Form className="w-100" style={{ maxWidth: '450px', backgroundColor: '#EEEEEE', borderRadius: '20px', padding: '30px' }} onSubmit={handleSubmit}>
                        <h2 className="mb-4" style={{ color: '#D03D18', fontWeight: 'bold' }}>Welcome back! </h2>
                       
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Email" name="email" value={inputs.email} onChange={handleChange} style={inputStyle} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Password" name="password" value={inputs.password} onChange={handleChange} style={inputStyle} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: '#D03D18', borderRadius: '12px' }}>Login</Button>
                        {error && <p className="text-danger mt-3">{error}</p>}
                        {success && <p className="text-success mt-3">{success}</p>}
                        <div className="text-center mt-3">
                            <span style={{ color: '#2D4263', fontWeight: '600' }}>Don't have an account? </span>
                            <a href="/login" style={linkStyle}>Sign In</a>
                        </div>
                    </Form>
                </Col>
                <Col md={6} className="d-none d-md-flex justify-content-center align-items-center p-4">
                    <img src={SignUpImage} alt="Sign Up" style={{ maxWidth: '100%', height: 'auto', maxHeight: '93vh' }} />
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;
