import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu2 from '../components/TopMenu2';
import angle from '../assets/angle.png'; 

//css for units button as component, also need to transfer 
const unitButtonStyle = {
  backgroundColor: '#2D4263',
  color: 'white',
  padding: '30px 20px',
  borderRadius: '20px',
  border: 'none',
  fontSize: '20px',
  margin: '10px',
  width: '70%',
  textAlign: 'center',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  transition: 'background-color 0.3s ease', 
};

const angleImageStyle = {
  position: 'absolute',
  right: '50px',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
};

// UnitButton as component, will transfer it later 

function UnitButton({ onClick }) {
  return (
    <Button
      style={unitButtonStyle}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1B2E4B'}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2D4263'}
    >
      Unit
      <img
        src={angle}
        alt="angle"
        style={angleImageStyle}
        onClick={onClick}
      />
    </Button>
  );
}

// Main UnitsPage Component
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
          <UnitButton onClick={() => alert('Angle clicked!')} />
          <UnitButton onClick={() => alert('Angle clicked!')} />
          <UnitButton onClick={() => alert('Angle clicked!')} />
          <UnitButton onClick={() => alert('Angle clicked!')} />
          <UnitButton onClick={() => alert('Angle clicked!')} />
          <UnitButton onClick={() => alert('Angle clicked!')} />
          <UnitButton onClick={() => alert('Angle clicked!')} />
          <UnitButton onClick={() => alert('Angle clicked!')} />
        </Col>
        <Col xs={12} md={6} style={colStyle}>
          <UnitButton onClick={() => alert('Angle clicked!')} />
          <UnitButton onClick={() => alert('Angle clicked!')} />
          <UnitButton onClick={() => alert('Angle clicked!')} />
          <UnitButton onClick={() => alert('Angle clicked!')} />
          <UnitButton onClick={() => alert('Angle clicked!')} />
          <UnitButton onClick={() => alert('Angle clicked!')} />
          <UnitButton onClick={() => alert('Angle clicked!')} />
          <UnitButton onClick={() => alert('Angle clicked!')} />
        </Col>
      </Row>
    </Container>
  );
}

export default UnitsPage;
