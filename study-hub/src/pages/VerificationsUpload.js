import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import VerificationImage from '../assets/3DSignUp.svg';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { completeInstructorRegistration } from '../services/apiService'; // Import the API service

function VerificationsUpload() {
  const { id } = useParams(); // Get the instructor ID from the URL
  const [inputs, setInputs] = useState({
    cv: null,
    education: '',
    proof: null
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    if (name === 'cv' || name === 'proof') {
      setInputs(prevState => ({ ...prevState, [name]: files[0] }));
    } else {
      setInputs(prevState => ({ ...prevState, [name]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('cv', inputs.cv);
    formData.append('education', inputs.education);
    formData.append('proof', inputs.proof);

    try {
      await completeInstructorRegistration(id, formData);
      alert('Verification complete');
    } catch (error) {
      console.error('Error completing registration', error);
    }
  };

  const inputStyle = {
    padding: '15px',
    fontSize: '16px',
    width: '100%',  
    borderRadius: '12px'
  };

  const textAreaStyle = {
    padding: '15px',
    fontSize: '16px',
    width: '100%',  
    borderRadius: '12px',
    height: '150px'
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
            <h2 className="mb-4" style={{ color: '#D03D18', fontWeight: 'bold' }}>Sign up</h2>
            <Form.Group className="mb-3">
              <Form.Label>Upload CV *</Form.Label>
              <Form.Control type="file" name="cv" onChange={handleChange} style={inputStyle} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Education</Form.Label>
              <Form.Control as="textarea" placeholder="Write about your education and credentials" name="education" value={inputs.education} onChange={handleChange} style={textAreaStyle} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Upload Proof of Qualifications *</Form.Label>
              <Form.Control type="file" name="proof" onChange={handleChange} style={inputStyle} />
            </Form.Group>
            <Button variant="primary" type="submit" className="w-100" style={{ backgroundColor: '#D03D18', borderRadius: '12px' }}>Submit</Button>
            <div className="text-center mt-3">
              <span style={{ color: '#2D4263', fontWeight: '600' }}>Already have an account? </span>
              <a href="/login" style={linkStyle}>Log in</a>
            </div>
          </Form>
        </Col>
        <Col md={6} className="d-none d-md-flex justify-content-center align-items-center p-4">
          <img src={VerificationImage} alt="Sign Up" style={{ maxWidth: '100%', height: 'auto', maxHeight: '93vh' }} />
        </Col>
      </Row>
    </Container>
  );
}

export default VerificationsUpload;
