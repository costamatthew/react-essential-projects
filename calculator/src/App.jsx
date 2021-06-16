import { useState } from "react";
import "./Calculator.css";
import { Jumbotron, Container, Row, Col, Button, Form } from "react-bootstrap";

function App() {
  const [txtNumeros, setTxtNumeros] = useState("0");

  const addNumber = (numero) => {
    setTxtNumeros(txtNumeros + numero);
  };

  const setOperation = (operation) => {
    setTxtNumeros(operation);
  };

  return (
    <Jumbotron
      style={{
        background: "transparent !important",
        backgroundColor: "#007bff",
        padding: "5px",
        margin: "5px",
        width: "400px",
      }}
    >
      <Container>
        <Row>
          <Col xs="3">
            <Button variant="danger">C</Button>
          </Col>
          <Col xs="9">
            <Form.Control
              type="text"
              name="textNumeros"
              className="text-right"
              readOnly="readonly"
              value={txtNumeros}
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber("7")}>
              7
            </Button>
          </Col>

          <Col>
            <Button variant="light" onClick={() => addNumber("8")}>
              8
            </Button>
          </Col>

          <Col>
            <Button variant="light" onClick={() => addNumber("9")}>
              9
            </Button>
          </Col>

          <Col>
            <Button variant="warning" onClick={() => setOperation("/")}>
              /
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber("4")}>
              4
            </Button>
          </Col>

          <Col>
            <Button variant="light" onClick={() => addNumber("5")}>
              5
            </Button>
          </Col>

          <Col>
            <Button variant="light" onClick={() => addNumber("6")}>
              6
            </Button>
          </Col>

          <Col>
            <Button variant="warning" onClick={() => setOperation("*")}>
              *
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber("1")}>
              1
            </Button>
          </Col>

          <Col>
            <Button variant="light" onClick={() => addNumber("2")}>
              2
            </Button>
          </Col>

          <Col>
            <Button variant="light" onClick={() => addNumber("3")}>
              3
            </Button>
          </Col>

          <Col>
            <Button variant="warning" onClick={() => setOperation("-")}>
              -
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="light" onClick={() => addNumber("0")}>
              0
            </Button>
          </Col>

          <Col>
            <Button variant="light">.</Button>
          </Col>

          <Col>
            <Button variant="success">=</Button>
          </Col>

          <Col>
            <Button variant="warning" onClick={() => setOperation("+")}>
              +
            </Button>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default App;
