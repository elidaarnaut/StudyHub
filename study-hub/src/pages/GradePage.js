import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu2 from '../components/TopMenu2';

function GradePage() {
  const gradePageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#FFFFFF',
  };

  const subjectTitleRowStyle = {
    marginTop: '20px',
    marginBottom: '20px',
  };

  const subjectTitleStyle = {
    color: '#2D4263',
    fontSize: '28px',
    textAlign: 'center',
    width: '100%',
    marginTop: "1cm",
  };

  const gradeSectionStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
  };

  const schoolTitleStyle = {
    color: '#2D4263',
    marginBottom: '10px',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  const gradeBoxStyle = {
    backgroundColor: '#2C3E50',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '80%',
    textAlign: 'center',
  };

  const dividerStyle = {
    width: '2px',
    backgroundColor: '#E0E0E0',
    margin: '0 20px',
    height: '100%',
  };

  const cardTextStyle = {
    margin: '10px 0',
    fontWeight: 'bold',
  };

  return (
    <Container fluid style={gradePageStyle}>
      <TopMenu2 />
      <Row style={subjectTitleRowStyle}>
        <Col>
          <h2 style={subjectTitleStyle}>Biology</h2>
        </Col>
      </Row>
      <Row style={gradeSectionStyle}>
        <Col xs={12} md={5} className="d-flex flex-column align-items-center">
          <h3 style={schoolTitleStyle}>Primary School</h3>
          <Card style={gradeBoxStyle}>
            <Card.Body>
              <Card.Text style={cardTextStyle}>1st Grade</Card.Text>
              <Card.Text style={cardTextStyle}>2nd Grade</Card.Text>
              <Card.Text style={cardTextStyle}>3rd Grade</Card.Text>
              <Card.Text style={cardTextStyle}>4th Grade</Card.Text>
              <Card.Text style={cardTextStyle}>5th Grade</Card.Text>
              <Card.Text style={cardTextStyle}>6th Grade</Card.Text>
              <Card.Text style={cardTextStyle}>7th Grade</Card.Text>
              <Card.Text style={cardTextStyle}>8th Grade</Card.Text>
              <Card.Text style={cardTextStyle}>9th Grade</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <div style={dividerStyle}></div>
        <Col xs={12} md={5} className="d-flex flex-column align-items-center">
          <h3 style={schoolTitleStyle}>High School</h3>
          <Card style={gradeBoxStyle}>
            <Card.Body>
              <Card.Text style={cardTextStyle}>1st Grade</Card.Text>
              <Card.Text style={cardTextStyle}>2nd Grade</Card.Text>
              <Card.Text style={cardTextStyle}>3rd Grade</Card.Text>
              <Card.Text style={cardTextStyle}>4th Grade</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default GradePage;
