import React, { useState } from 'react';
import { Container, Row, Col, Button, Collapse } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu2 from '../components/TopMenu2';
import angle from '../assets/angle.png'; 

// UnitButton Component
function UnitButton() {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div style={{ position: 'relative', width: '70%', margin: '10px' }}>
      <Button
        style={{
          backgroundColor: '#2D4263',
          color: 'white',
          padding: '30px 20px',  
          borderRadius: '20px',
          border: 'none',
          fontSize: '20px',
          margin: '10px',
          width: '100%', 
          textAlign: 'left', 
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          position: 'relative',
          transition: 'background-color 0.3s ease', 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1B2E4B'}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2D4263'}
        onClick={toggleDropdown} // Toggle dropdown on button click
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          Unit
          <img
            src={angle}
            alt="angle"
            style={{
              cursor: 'pointer',
              marginLeft: 'auto',
            }}
          />
        </div>
        <Collapse in={open}>
          <div style={{
            backgroundColor: '#2D4263',
            color: 'white',
            padding: '20px 0 0 0',
            borderRadius: '10px',
            marginTop: '10px',
            textAlign: 'left',
            width: '100%', 
          }}>
            <hr style={{ borderColor: 'white', width: '100%' }} />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </div>
        </Collapse>
      </Button>
    </div>
  );
}

//Component
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
          <UnitButton />
          <UnitButton />
          <UnitButton />
          <UnitButton />
          <UnitButton />
          <UnitButton />
          <UnitButton />
          <UnitButton />
        </Col>
        <Col xs={12} md={6} style={colStyle}>
          <UnitButton />
          <UnitButton />
          <UnitButton />
          <UnitButton />
          <UnitButton />
          <UnitButton />
          <UnitButton />
          <UnitButton />
        </Col>
      </Row>
    </Container>
  );
}

export default UnitsPage;
