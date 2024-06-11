import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu2 from '../components/TopMenu2'; // Import the TopMenu2 component

const ModulePage = () => {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#FFFFFF',
    padding: '65px',
  };

  const titleStyle = {
    color: '#2D4263',
    fontSize: '32px',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: '20px',
  };

  const subtitleStyle = {
    color: '#2D4263',
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '20px',
  };

  const textStyle = {
    color: '#000000',
    fontSize: '18px',
    marginTop: '10px',
  };

  const grayContainerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#4F6E9F',
    borderColor: '#4F6E9F',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '30px',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  return (
    <Container fluid style={pageStyle}>
                  <TopMenu2></TopMenu2>

      <Row>
        <Col>
          <h1 style={titleStyle}>Introduction to Biology</h1>
          <Card style={grayContainerStyle}>
            <Card.Body>
              <div>
                <h2 style={subtitleStyle}>What is Biology?</h2>
                <p style={textStyle}>
                  Biology is the scientific study of life and living organisms. It encompasses various subfields that explore different aspects of life, from molecular and cellular processes to the interactions of organisms with their environment.
                </p>
                <p style={textStyle}>
                  <strong>Branches of Biology:</strong>
                  <ul>
                    <li>Botany: The study of plants.</li>
                    <li>Zoology: The study of animals.</li>
                    <li>Microbiology: The study of microscopic organisms.</li>
                    <li>Genetics: The study of heredity and variation in organisms.</li>
                    <li>Ecology: The study of organisms' interactions with each other and their environments.</li>
                  </ul>
                </p>
                <p style={textStyle}>
                  Understanding biological processes is essential for addressing many global challenges, such as healthcare, agriculture, and environmental conservation. Biology helps us understand the mechanisms of life, leading to advancements in medicine, biotechnology, and conservation efforts.
                </p>
              </div>
              <div>
                <h2 style={subtitleStyle}>The Scientific Method</h2>
                <p style={textStyle}>
                  The scientific method is a step-by-step process used by scientists to investigate natural phenomena and answer scientific questions.
                </p>
                <p style={textStyle}>
                  <strong>Steps of the Scientific Method:</strong>
                  <ul>
                    <li>Observation: Gathering data and noting phenomena that prompt scientific questions.</li>
                    <li>Hypothesis: Formulating a testable statement or prediction based on observations.</li>
                    <li>Experiment: Designing and conducting experiments to test the hypothesis.</li>
                    <li>Analysis: Interpreting the data collected during experiments.</li>
                    <li>Conclusion: Drawing conclusions based on the analysis and determining whether the hypothesis is supported or refuted.</li>
                  </ul>
                </p>
                <p style={textStyle}>
                  The scientific method is used to conduct research and experiments across various fields of biology.
                </p>
              </div>
              <div>
                <h2 style={subtitleStyle}>Lab Safety and Tools</h2>
                <p style={textStyle}>
                  Understanding the importance of lab safety and becoming familiar with common laboratory tools are crucial for conducting biological research.
                </p>
                <p style={textStyle}>
                  <strong>Lab Safety Rules:</strong>
                  <ul>
                    <li>Always wear appropriate personal protective equipment (PPE), such as lab coats, gloves, and safety goggles.</li>
                    <li>Know the location and proper use of safety equipment, including fire extinguishers, eye wash stations, and first aid kits.</li>
                    <li>Never eat, drink, or apply cosmetics in the laboratory.</li>
                    <li>Label and store chemicals properly, and dispose of waste according to safety guidelines.</li>
                    <li>Understand and follow all safety protocols when handling biological specimens and hazardous materials.</li>
                  </ul>
                </p>
                <p style={textStyle}>
                  <strong>Common Laboratory Tools:</strong>
                  <ul>
                    <li>Microscope: Used to observe small organisms and cell structures.</li>
                    <li>Pipette: Used to measure and transfer small volumes of liquid accurately.</li>
                    <li>Test Tubes: Used to hold, mix, and heat chemical substances.</li>
                    <li>Beakers and Flasks: Used for mixing, stirring, and heating chemicals.</li>
                    <li>Bunsen Burner: Used for heating and sterilization.</li>
                  </ul>
                </p>
                <p style={textStyle}>
                  Adhering to lab safety protocols protects researchers and students from potential hazards and ensures a safe working environment. Proper use of lab tools enhances the accuracy and reliability of experimental results.
                </p>
              </div>
            </Card.Body>
          </Card>
          <div style={buttonContainerStyle}>
            <Button style={buttonStyle}>Test Your Knowledge</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ModulePage;
