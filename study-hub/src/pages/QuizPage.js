import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu2 from '../components/TopMenu2';
import { fetchRandomQuestions } from '../services/apiService'; // Import the function to fetch random questions

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const navigate = useNavigate();

  const fetchQuestions = async () => {
    try {
      const fetchedQuestions = await fetchRandomQuestions(5); // Fetch five random questions
      if (fetchedQuestions.length > 0) {
        setQuestions(fetchedQuestions);
        setSelectedOption(null);
        setIsCorrect(null);
        setCurrentQuestionIndex(0); // Reset to the first question
      }
    } catch (error) {
      console.error('Failed to fetch questions:', error);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const handleSubmit = () => {
    const currentQuestion = questions[currentQuestionIndex];
    const correct = currentQuestion.correctAnswer === currentQuestion.options[selectedOption];
    setIsCorrect(correct);

    if (currentQuestionIndex >= 4) { // If it's the last question
      navigate('/testsPage'); // Navigate to the tests page
    } else {
      setTimeout(() => {
        setSelectedOption(null);
        setIsCorrect(null);
        setCurrentQuestionIndex(currentQuestionIndex + 1); // Move to the next question
      }, 2000); // Delay to show color feedback
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f5f5',
  };

  const questionStyle = {
    width: '80%',
    backgroundColor: '#f8d7da',
    borderRadius: '30px',
    padding: '20px',
    marginBottom: '50px',
    textAlign: 'center',
  };

  const getOptionStyle = (index) => ({
    width: '100%',
    backgroundColor: isCorrect === null ? '#e0e0e0' : (isCorrect && selectedOption === index) ? '#d4edda' : (!isCorrect && selectedOption === index) ? '#f8d7da' : '#e0e0e0',
    borderRadius: '30px',
    padding: '10px',
    marginBottom: '10px',
    textAlign: 'center',
    cursor: 'pointer',
  });

  const buttonStyle = {
    backgroundColor: '#dc3545',
    borderColor: '#dc3545',
    color: 'white',
    borderRadius: '30px',
    padding: '10px 50px',
    fontSize: '18px',
    fontWeight: 'bold',
    marginTop: '40px',
  };

  return (
    <Container fluid style={containerStyle}>
      <TopMenu2 />
      {currentQuestion ? (
        <>
          <div style={questionStyle}>{currentQuestion.text}</div>
          <Row className="justify-content-center" style={{ width: '80%' }}>
            {currentQuestion.options.map((option, index) => (
              <Col xs={12} md={6} style={{ marginBottom: '10px' }} key={index}>
                <div 
                  style={getOptionStyle(index)}
                  onClick={() => setSelectedOption(index)}
                >
                  {option}
                </div>
              </Col>
            ))}
          </Row>
          <Button style={buttonStyle} onClick={handleSubmit}>Submit Answer</Button>
        </>
      ) : (
        <div>Loading questions...</div>
      )}
    </Container>
  );
};

export default QuizPage;
