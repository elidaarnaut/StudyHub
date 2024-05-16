import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import SignUpImage from '../assets/3DSignUp.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

// This signup2 page is step 1 for instructors to register to the page.

function SignUp2() {
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
    // sign up logic will need it later
    navigate('/verification');
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

  const formStyle = {
    maxWidth: '450px', 
    backgroundColor: '#EEEEEE', 
    borderRadius: '20px', 
    padding: '30px'
  };

  return (
    <Container fluid className="min-vh-100 d-flex" style={{ backgroundColor: '#2D4263' }}>
      <Row className="w-100 align-items-center">
        <Col xs={12} md={6} className="d-flex justify-content-center p-4">
          <Form className="w-100" style={formStyle} onSubmit={handleSubmit}>
            <h2 className="mb-4" style={{ color: '#D03D18', fontWeight: 'bold' }}>Sign Up</h2>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" name="name" value={inputs.name} onChange={handleChange} style={inputStyle} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" name="email" value={inputs.email} onChange={handleChange} style={inputStyle} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter your password" name="password" value={inputs.password} onChange={handleChange} style={inputStyle} />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: '#D03D18', borderRadius: '12px' }}>Sign Up</Button>
            <div className="text-center mt-3">
              <span style={{ color: '#2D4263', fontWeight: '600' }}>Already have an account? </span>
              <a href="/login" style={linkStyle}>Log In</a>
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

export default SignUp2;
