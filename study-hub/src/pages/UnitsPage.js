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
        onClick={toggleDropdown} 
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        Introduction to Biology
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
            In this module, you will learn the basics of biology and its importance in studying life. You will explore the scientific method, a key process for investigating natural phenomena. Additionally, you will become familiar with essential lab safety protocols and the tools used in biological research. This foundation will prepare you for more advanced studies in biology.

          </div>
        </Collapse>
      </Button>
    </div>
  );
}

// Component
function UnitsPage() {
  const pageStyle = {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#FFFFFF',
  };

  const titleRowStyle = {
    marginTop: '26px',
    marginBottom: '20px',
  };

  const titleStyle = {
    color: '#2D4263',
    fontSize: '24px',
    textAlign: 'left',
    width: '100%',
    marginLeft: '9%',
    marginTop: '6%',
  };

  const lineStyle = {
    border: 'none', 
    borderBottom: '3px solid #2D4263', 
    marginLeft: '9%',
    marginRight: '9%',
  };

  const colStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const verticalLineStyle = {
    borderLeft: '3px solid #2D4263',
    height: '100%',
  };

  return (
    <Container fluid style={pageStyle}>
      <TopMenu2 />
      <Row style={titleRowStyle}>
        <Col>
          <h2 style={titleStyle}>1st Grade &gt; Units</h2>
          <hr style={lineStyle} />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={5} style={colStyle}>
          <UnitButton />
          <UnitButton />
          <UnitButton />
          <UnitButton />
        </Col>
        <Col xs={12} md={2} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={verticalLineStyle}></div>
        </Col>
        <Col xs={12} md={5} style={colStyle}>
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
