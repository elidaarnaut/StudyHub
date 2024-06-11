import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { login } from '../services/apiService';
function LoginPage() {
    const [inputs, setInputs] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevState) => ({ ...prevState, [name]: value }));
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await login(inputs);
            console.log('Login successful:', response);
            setError('');
            // Check the user's role and navigate to the respective dashboard
            if (response.user.role === 'student') {
                navigate('/dashboardStudent');
            } else if (response.user.role === 'instructor') {
                navigate('/dashboardInstructor');
            } else {
                // Default or admin dashboard
                //navigate('/dashboardAdmin');
                navigate('/dashboardAdministrator');
            }
        } catch (error) {
            setError(error.message || 'Error logging in');
        }
    };
    return (
        <Container fluid className="min-vh-100 d-flex" style={{ backgroundColor: '#2D4263' }}>
            <Row className="w-100 align-items-center">
                <Col xs={12} md={6} className="d-flex justify-content-center p-4">
                    <Form className="w-100" style={{ maxWidth: '450px', backgroundColor: '#EEEEEE', borderRadius: '20px', padding: '30px' }} onSubmit={handleSubmit}>
                        <h2 className="mb-4" style={{ color: '#D03D18', fontWeight: 'bold' }}>Login</h2>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Email" name="email" value={inputs.email} onChange={handleChange} required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Password" name="password" value={inputs.password} onChange={handleChange} required />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: '#D03D18', borderRadius: '12px' }}>Login</Button>
                        {error && <p className="text-danger mt-3">{error}</p>}
                    </Form>
                </Col>
                <Col md={6} className="d-none d-md-flex justify-content-center align-items-center p-4">
                    {/* Add any additional content or image */}
                </Col>
            </Row>
        </Container>
    );
}
export default LoginPage;