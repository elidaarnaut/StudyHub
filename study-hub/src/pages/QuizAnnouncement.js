import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu2 from '../components/TopMenu2'; // Import the TopMenu2 component

const QuizAnnouncement = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/quizPage');
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  };

  const boxStyle = {
    width: '700px',
    height: '300px',
    backgroundColor: '#e0e0e0',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px', // Space between the box and the button
    padding: '20px', // Padding inside the box
    textAlign: 'justify', // Justify the text
    fontSize: '18px',
    lineHeight: '1.5',
    fontWeight: '500',
  };

  const buttonStyle = {
    backgroundColor: '#dc3545',
    borderColor: '#dc3545',
    color: 'white',
    borderRadius: '30px',
    padding: '10px 50px',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  return (
    <Container fluid style={containerStyle}>
      <TopMenu2 />
      <Row className="justify-content-center">
        <Col xs="auto">
          <div style={boxStyle}>
            Dear Students,
            <br />
            <br />
            We would like to inform you about an upcoming quiz. The quiz will feature 5 multiple-choice questions, followed by one essay question. Upon completion, you will receive feedback on your performance to help you identify your strengths and areas for improvement. This is a great opportunity to demonstrate your knowledge and skills.
            <br />
            <br />
            Good luck!
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Button style={buttonStyle} onClick={handleButtonClick}>Take the Quiz</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default QuizAnnouncement;
