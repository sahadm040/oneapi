import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { characterSingleView } from "../store/api/character.route";
import { Link, useParams } from "react-router-dom";
import { map } from "lodash";
import Character from "../pages/Character";

const CharacterDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();
  console.log("params", params);
  const [character, setCharacter] = useState();

  useEffect(
    (id) => {
      dispatch(characterSingleView(params.id));
    },
    [dispatch, params.id]
  );
  const { characterView } = useSelector((state) => state.character);
  console.log("characterView", characterView);
  useEffect(() => {
    setCharacter(characterView);
  }, [characterView]);

  return (
    <div>
      <Character>
        <Container>
          {map(character, (item, key) => (
            <Card className="py-2" key={key}>
              <header
                className="p-2"
                style={{ borderBottom: "1px solid gray", textAlign: "center" }}
              >
                Characters {item?.name}
              </header>
              <section className="p-3">
                <Row>
                  <Col md="3">Name</Col>
                  <Col>{item?.name}</Col>
                </Row>
                <Row>
                  <Col md="3">WikiUrl</Col>
                  <Col>{item?.wikiUrl}</Col>
                </Row>
                <Row>
                  <Col md="3">Race</Col>
                  <Col>{item?.race}</Col>
                </Row>
                <Row>
                  <Col md="3">Gender</Col>
                  <Col>{item?.gender}</Col>
                </Row>
                <Row>
                  <Col md="3">Height</Col>
                  <Col>{item?.height}</Col>
                </Row>
                <Row>
                  <Col md="3">Hair</Col>
                  <Col>{item?.hair}</Col>
                </Row>
                <Row>
                  <Col md="3">Realm</Col>
                  <Col>{item?.realm}</Col>
                </Row>
                <Row>
                  <Col md="3">Birth</Col>
                  <Col>{item?.birth}</Col>
                </Row>
                <Row>
                  <Col md="3">Spouse</Col>
                  <Col>{item?.spouse}</Col>
                </Row>
                <Row>
                  <Col md="3">Death</Col>
                  <Col>{item?.death}</Col>
                </Row>
              </section>
              <section className="">
                <Row>
                  <Col md="8"></Col>
                  <Col className="text-center">
                    <Link to={"/CharacterListing"}>
                      <Button>CLOSE</Button>
                    </Link>
                  </Col>
                </Row>
              </section>
            </Card>
          ))}
        </Container>
      </Character>
    </div>
  );
};

export default CharacterDetails;
