import React from 'react';
import './App.css';
import Pomodoro from "./components/Pomodoro"
import Todo from "./components/Todo"

// Importing Bootstrap
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



export default function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className=" bg-red-200">
            <Pomodoro></Pomodoro>
          </Col>
          <Col>
            <Todo></Todo>
          </Col>
        </Row>
      </Container>
    </div>
  );
}