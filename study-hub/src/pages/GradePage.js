import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
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
    marginTop:'50px',
    textAlign: 'center',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  };

  const gradeBoxStyle = {
    backgroundColor: '#2D4263',
    color: 'white',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    width: '80%',
    textAlign: 'center',
  };

  //const hrStyle = {
    //width: '2px',
    //backgroundColor: '#2D4263',
    //margin: '0 20px',
    ////height: 'auto',
    //border: 'none',
  //};

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
          <div style={subjectTitleUnderlineStyle}></div>
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
        <Col xs="auto" className="d-flex align-items-start">
        <br />
        </Col>
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
