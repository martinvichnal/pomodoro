// import '@radix-ui/themes/styles.css';
// import { Theme, Button } from '@radix-ui/themes'

// Importing Bootstrap themes
import "bootstrap/dist/css/bootstrap.min.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import React, { useState, useEffect } from 'react';

export const Pomodoro = () => {
    const [minutes, setMinutes] = useState(60);
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    let interval: NodeJS.Timeout; // Explicitly define the type of interval

    const setIntervalMin = 60;
    const setIntervalSec = 0;

    const handleStart = () => {
        setRunning(true);
    }

    const handleStop = () => {
        setRunning(false);
    }

    const handleRestart = () => {
        // clearInterval(interval);
        setMinutes(setIntervalMin);
        setSeconds(setIntervalSec);
    }


    useEffect(() => {
        if (running && (minutes > 0 || seconds > 0)) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval);
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [running, minutes, seconds]);

    return (
        <Container>
            <Row>
                <Col className=" bg-red-200">
                    <h3>Pomodoro</h3>
                    <Row>
                        <div>Countdown</div>
                        <p>{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</p>
                    </Row>
                    <Row>
                        <div>Controls</div>
                        <Col>
                            <Button onClick={handleStart} variant="success">START</Button>{' '}
                            <Button onClick={handleStop} variant="danger">STOP</Button>{' '}
                            <Button onClick={handleRestart} variant="secondary">REASTART</Button>{' '}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div>Quick sets</div>
                            <Col>
                                <Button variant="secondary">15:00</Button>{' '}
                                <Button variant="secondary">25:00</Button>{' '}
                            </Col>
                            <Col>
                                <Button variant="secondary">30:00</Button>{' '}
                                <Button variant="secondary">45:00</Button>{' '}
                            </Col>
                            <Col>
                                <Button variant="secondary">50:00</Button>{' '}
                                <Button variant="secondary">60:00</Button>{' '}
                            </Col>
                        </Col>
                        <Col>
                            <div>Total Focused</div>
                            <div>154:25</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};