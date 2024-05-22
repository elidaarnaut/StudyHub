import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu2 from '../components/TopMenu2';
import angle from '../assets/angle.png'; 

function UnitsPage() {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#FFFFFF',
  };

  const titleRowStyle = {
    marginTop: '20px',
    marginBottom: '20px',
  };

  const titleStyle = {
    color: '#2D4263',
    fontSize: '24px',
    textAlign: 'left',
    width: '100%',
    marginLeft: '20px',
  };

  const unitButtonStyle = {
    backgroundColor: '#2D4263',
    color: 'white',
    padding: '30px 20px',  // Increased padding to make the buttons taller
    borderRadius: '20px',
    border: 'none',
    fontSize: '20px',
    margin: '10px',
    width: '70%',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative', 
  };

  const angleImageStyle = {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
  };

  const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <Container fluid style={pageStyle}>
      <TopMenu2 />
      <Row style={titleRowStyle}>
        <Col>
          <h2 style={titleStyle}>1st Grade &gt; Units</h2>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} style={colStyle}>
            
          <Button style={unitButtonStyle}> 
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')} // i need to put handler logic here
            />
          </Button>
          
          <Button style={unitButtonStyle}>
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')} // i need to make this unit button a component also, that way making code more readable
            />
          </Button>
          <Button style={unitButtonStyle}>
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')} 
            />
          </Button>
          <Button style={unitButtonStyle}>
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')} 
            />
          </Button>
          <Button style={unitButtonStyle}>
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')} 
            />
          </Button>
          <Button style={unitButtonStyle}>
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')} 
            />
          </Button>
          <Button style={unitButtonStyle}>
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')} 
            />
          </Button>
          <Button style={unitButtonStyle}>
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')} 
            />
          </Button>
        </Col>
        <Col xs={12} md={6} style={colStyle}>
          <Button style={unitButtonStyle}>
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')} 
            />
          </Button>
          <Button style={unitButtonStyle}>
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')} 
            />
          </Button>
          <Button style={unitButtonStyle}>
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')} 
            />
          </Button>
          <Button style={unitButtonStyle}>
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')} 
            />
          </Button>
          <Button style={unitButtonStyle}>
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')} 
            />
          </Button>
          <Button style={unitButtonStyle}>
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')} 
            />
          </Button>
          <Button style={unitButtonStyle}>
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')}
            />
          </Button>
          <Button style={unitButtonStyle}>
            Unit
            <img 
              src={angle} 
              alt="angle" 
              style={angleImageStyle} 
              onClick={() => alert('Angle clicked!')} 
            />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default UnitsPage;
