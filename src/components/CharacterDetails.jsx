import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CharacterDetails = () => {
  return (
    <div>
      <Container>
        <Card className="py-2">
          <header
            className="p-2"
            style={{ borderBottom: "1px solid gray", textAlign: "center" }}
          >
            Characters Amandil
          </header>
          <section className="p-3">
            <Row>
              <Col md="3">name</Col>
              <Col>Amandil</Col>
            </Row>
            <Row>
              <Col md="3">name</Col>
              <Col>
                AmandilAmandilAmandilAmandilAmandilAmandilAmandilAmandilAman
              </Col>
            </Row>
            <Row>
              <Col md="3">name</Col>
              <Col>Amandil</Col>
            </Row>
            <Row>
              <Col md="3">name</Col>
              <Col>Amandil</Col>
            </Row>
          </section>
          <section className="">
            <Row>
              <Col md="8"></Col>
              <Col className="text-center">
                <Button>CLOSE</Button>
              </Col>
            </Row>
          </section>
        </Card>
      </Container>
    </div>
  );
};

export default CharacterDetails;
