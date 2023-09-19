import React from "react";
import { Container } from "react-bootstrap";
import CharacterListing from "../components/CharacterListing";
import CharacterDetails from "../components/CharacterDetails";

const Character = () => {
  return (
    <div>
      <Container>
        <div className="d-flex flex-column align-items-center m-4">
          <h1>The Lord of the Rings API</h1>
          <p>The one API to rule them all</p>
        </div>
        <CharacterListing />
        <CharacterDetails />
      </Container>
    </div>
  );
};

export default Character;
