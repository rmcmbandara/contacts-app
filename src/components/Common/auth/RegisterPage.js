import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const RegisterPage = () => {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col>
          <h1>Login</h1>
        </Col>
      </Row>
      <Row className="px-4 my-5">
        <Col sm={6}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="PassWord" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicConfirm">
              <Form.Label>Cofirm</Form.Label>
              <Form.Control type="password" placeholder="PassWord" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Confirm &gt;&gt;
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterPage;
