import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopMenu2 from '../components/TopMenu2'; // Import the TopMenu2 component

const PhetSimulationPage = () => {
    const [currentSimulation, setCurrentSimulation] = useState('physics');

    const simulations = {
        physics: 'https://phet.colorado.edu/sims/html/faradays-law/latest/faradays-law_en.html',
        chemistry: 'https://phet.colorado.edu/sims/html/ph-scale-basics/latest/ph-scale-basics_en.html',
        mathematics: 'https://phet.colorado.edu/sims/html/number-line-integers/latest/number-line-integers_en.html'
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        marginTop: '60px',
    };

    const blueSectionStyle = {
        width: '800px',
        height: '600px',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        color: 'white',
    };

    const buttonContainerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '600px',
    };

    const buttonStyle = {
        backgroundColor: '#dc3545',
        borderColor: '#dc3545',
        color: 'white',
        borderRadius: '30px',
        padding: '10px 20px',
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '50px',
        marginTop: '50px',
        transition: 'background-color 0.3s ease, color 0.3s ease',
    };

    return (
        <Container fluid style={containerStyle}>
            <TopMenu2 />
            <Row className="justify-content-center">
                <Col xs="auto">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={blueSectionStyle}>
                            <iframe 
                                src={simulations[currentSimulation]}
                                width="750"
                                height="550"
                                allowFullScreen
                                style={{ border: 'none', borderRadius: '8px' }}
                            ></iframe>
                        </div>
                        <div style={buttonContainerStyle}>
                            <Button 
                                style={buttonStyle} 
                                onClick={() => setCurrentSimulation('physics')}
                                className={currentSimulation === 'physics' ? 'active' : ''}
                            >
                                Physics
                            </Button>
                            <Button 
                                style={buttonStyle} 
                                onClick={() => setCurrentSimulation('chemistry')}
                                className={currentSimulation === 'chemistry' ? 'active' : ''}
                            >
                                Chemistry
                            </Button>
                            <Button 
                                style={buttonStyle} 
                                onClick={() => setCurrentSimulation('mathematics')}
                                className={currentSimulation === 'mathematics' ? 'active' : ''}
                            >
                                Mathematics
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <style>
                {`
                    .btn:hover {
                        background-color: black !important;
                        color: white !important;
                    }
                    .btn.active {
                        background-color: red !important;
                        border-color: red !important;
                    }
                `}
            </style>
        </Container>
    );
};

export default PhetSimulationPage;
