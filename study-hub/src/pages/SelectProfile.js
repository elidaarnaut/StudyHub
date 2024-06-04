import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import StudentImage from '../assets/student.jpg';
import InstructorImage from '../assets/instructor.jpg';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Montserrat:400,700']
    }
});

function SelectProfile() {
    const navigate = useNavigate();

    const containerStyle = {
        marginTop: '5rem',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Montserrat, sans-serif'
    };

    const titleStyle = {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '700'  // Bold font weight
    };

    const cardStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        border: 'none',  // Remove border
        padding: '1rem',
        boxShadow: 'none',  // Remove shadow
        cursor: 'pointer'  // Change cursor to pointer to indicate clickability
    };

    const imageStyle = {
        width: '100%',  
        height: 'auto',
        borderRadius: '20px'  // Add border radius to the image
    };

    const colStyle = {
        margin: '0 1rem'  // Add margin to the columns to create space between cards
    };

    const handleInstructorClick = () => {
        navigate('/signup2');
    };

    const handleStudentClick = () => {
        navigate('/signup1');
    };

    return (
        <Container style={containerStyle}>
            <h2 className="text-center mb-4" style={titleStyle}>Please choose account type!</h2>
            <Row className="d-flex justify-content-center">
                <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch" style={colStyle} onClick={handleStudentClick}>
                    <Card className="text-center" style={cardStyle}>
                        <Card.Img variant="top" src={StudentImage} style={imageStyle} />
                        <Card.Body></Card.Body>
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4 d-flex align-items-stretch" style={colStyle} onClick={handleInstructorClick}>
                    <Card className="text-center" style={cardStyle}>
                        <Card.Img variant="top" src={InstructorImage} style={imageStyle} />
                        <Card.Body></Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default SelectProfile;
