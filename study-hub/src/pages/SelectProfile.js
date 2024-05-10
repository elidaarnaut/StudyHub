import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Container, Row, Col } from 'react-bootstrap';
import StudentImage from '../assets/student.svg';
import InstructorImage from '../assets/instructor.svg';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Montserrat:400,700']
    }
});

function SelectProfile() {
    const containerStyle = {
        marginTop: '5rem',
        backgroundColor: '#FFFFFF',
        fontFamily: 'Montserrat, sans-serif'
    };

    const titleStyle = {
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: '700'  // Bold font weight
    };

   

    const imageStyle = {
        width: '100%',  
        height: '100%'  
    };

    return (
        <Container style={containerStyle}>
            <h2 className="text-center mb-4" style={titleStyle}>Please choose account type!</h2>
            <Row className="d-flex justify-content-center">
                <Col md={6} lg={4} className="mb-4 mx-2">  
                    <Card className="text-center">
                        <Card.Img variant="top" src={StudentImage} style={imageStyle} />
                       
                    </Card>
                </Col>
                <Col md={6} lg={4} className="mb-4 mx-2"> 
                    <Card className="text-center">
                        <Card.Img variant="top" src={InstructorImage} style={imageStyle} />
                        
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default SelectProfile;
