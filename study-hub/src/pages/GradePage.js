import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu2 from '../components/TopMenu2';

function GradePage() {
  const gradePageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#FFFFFF',
    padding: '20px',
  };

  const subjectTitleRowStyle = {
    marginTop: '55px',
    marginBottom: '20px',
  };

  const subjectTitleStyle = {
    color: '#2D4263',
    fontSize: '32px',
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
    position: 'relative',
  };

  const subjectTitleUnderlineStyle = {
    display: 'block',
    width: '80%',
    height: '2px',
    backgroundColor: '#2D4263',
    margin: '10px auto 0',
  };

  const gradeSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: '30px',
  };

  const schoolTitleStyle = {
    color: '#000000',
    marginBottom: '20px',
    marginTop: '50px',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  const gradeBoxStyle = {
    backgroundColor: '#2D4263',
    color: 'white',
    padding: '20px',
    borderRadius: '30px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '80%',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#4F6E9F',
    borderColor: '#4F6E9F',
    color: 'white',
    width: '80%',
    margin: '3px 0',borderRadius: '30px',
  };

  const verticalLineStyle = {
    borderLeft: '3px solid #2D4263',
    height: '100%',
    alignSelf: 'stretch', // Ensure the vertical line stretches to fill the height of the row
  };

  return (
    <Container fluid style={gradePageStyle}>
      <TopMenu2 />
      <Row style={subjectTitleRowStyle}>
        <Col>
          <h2 style={subjectTitleStyle}>Biology</h2>
          <div style={subjectTitleUnderlineStyle}></div>
        </Col>
      </Row>
      <Row style={gradeSectionStyle}>
        <Col xs={12} md={5} className="d-flex flex-column align-items-center">
          <h3 style={schoolTitleStyle}>Primary School</h3>
          <Card style={gradeBoxStyle}>
            <Card.Body>
              <Button style={buttonStyle}>1st Grade</Button>
              <Button style={buttonStyle}>2nd Grade</Button>
              <Button style={buttonStyle}>3rd Grade</Button>
              <Button style={buttonStyle}>4th Grade</Button>
              <Button style={buttonStyle}>5th Grade</Button>
              <Button style={buttonStyle}>6th Grade</Button>
              <Button style={buttonStyle}>7th Grade</Button>
              <Button style={buttonStyle}>8th Grade</Button>
              <Button style={buttonStyle}>9th Grade</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs="auto" className="d-flex align-items-center">
          <div style={verticalLineStyle}></div>
        </Col>
        <Col xs={12} md={5} className="d-flex flex-column align-items-center">
          <h3 style={schoolTitleStyle}>High School</h3>
          <Card style={gradeBoxStyle}>
            <Card.Body>
              <Button style={buttonStyle}>1st Grade</Button>
              <Button style={buttonStyle}>2nd Grade</Button>
              <Button style={buttonStyle}>3rd Grade</Button>
              <Button style={buttonStyle}>4th Grade</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default GradePage;
