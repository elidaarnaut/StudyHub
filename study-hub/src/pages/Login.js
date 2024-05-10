import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SignUpImage from '../assets/3DSignUp.svg';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is imported

function Login() {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
        // login logic will need it later
    };

    const inputStyle = {
        padding: '15px',
        fontSize: '16px',
        width: '100%',  
        borderRadius: '12px'
    };

    return (
        <Container fluid className="min-vh-100 d-flex" style={{ backgroundColor: '#2D4263' }}>
            <Row className="w-100 align-items-center">
                <Col xs={12} md={6} className="d-flex justify-content-center p-4">
                    <Form className="w-100" style={{ maxWidth: '450px', backgroundColor: '#EEEEEE', borderRadius: '20px', padding: '30px' }} onSubmit={handleSubmit}>
                        <h2 className="mb-4" style={{ color: '#D03D18', fontWeight: 'bold' }}>Sign Up</h2>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" placeholder="Name" name="name" value={inputs.name} onChange={handleChange} style={inputStyle} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" placeholder="Email" name="email" value={inputs.email} onChange={handleChange} style={inputStyle} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="password" placeholder="Password" name="password" value={inputs.password} onChange={handleChange} style={inputStyle} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: '#D03D18', borderRadius: '12px' }}>Login</Button>
                    </Form>
                </Col>
                <Col md={6} className="d-none d-md-flex justify-content-center align-items-center p-4">
                    <img src={SignUpImage} alt="Sign Up" style={{ maxWidth: '100%', height: 'auto', maxHeight: '93vh' }} />
                </Col>
            </Row>
        </Container>
    );
}

export default Login;
