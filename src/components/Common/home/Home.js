import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const Home = () => {
  return (
    <Container>
      <Row className="px-4 my-5">
        <Col xs={4} sm={6}>
          <Image src="/img/LOGO-Full.png" fluid />
        </Col>
        <Col sm={6}>
          <h1 className="font-weight-light">Contact App</h1>
          <p className="mt-4">
            Anim eiusmod sint ut exercitation adipisicing.
            <br />
            Ut mollit sit aliqua quis enim proident sint sint cupidatat non
            nostrud commodo aliquip. Minim mollit in amet proident occaecat
            ullamco incididunt velit pariatur dolore esse. Nulla minim nisi
            excepteur ea ex aute. Excepteur aute dolor irure laborum velit
            ullamco duis eiusmod voluptate excepteur duis.
          </p>
          <Button variant="outline-primary">Get Started </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
