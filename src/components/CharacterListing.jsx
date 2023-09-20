import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Table } from "react-bootstrap";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";
import { allCharacters } from "../store/api/character.route";
import { map } from "lodash";
import { Link } from "react-router-dom";
import Character from "../pages/Character";

const CharacterListing = () => {
  const [characterListView, setCharacterListView] = useState();
  const [list, setList] = useState();
  console.log("list", list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allCharacters());
  }, [dispatch]);
  const { characterList, characterViewObject } = useSelector(
    (state) => state.character
  );
  console.log("characterList", characterList);
  console.log("characterViewObject", characterViewObject.docs);
  useEffect(() => {
    setCharacterListView(characterViewObject);
    setList(characterViewObject?.docs);
  }, [characterViewObject]);
  console.log("character", characterListView);

  const items = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Doe" },
    { id: 3, name: "Peter Parker" },
  ];
  const [gender, setGender] = useState("");

  const handleChange = (e) => {
    setGender(e.target.value);
  };

  const [sortedItems, setSortedItems] = useState([...items]);

  const sortByName = (isAscending) => {
    const sortedItemsCopy = [...sortedItems];

    sortedItemsCopy.sort((item1, item2) => {
      if (isAscending) {
        return item1.name.localeCompare(item2.name);
      } else {
        return item2.name.localeCompare(item1.name);
      }
    });

    setSortedItems(sortedItemsCopy);
  };
  return (
    <div>
      <Character>
        <Container>
          <Card className="py-2 mb-5">
            <header
              className="p-2"
              style={{ borderBottom: "1px solid gray", textAlign: "center" }}
            >
              Characters
            </header>
            <section style={{ borderBottom: "1px solid gray" }}>
              <div className="m-3">
                <Row>
                  <Col md="6">
                    <div className="d-flex">
                      <p>Search</p>
                      <Input className="mx-2"></Input>
                    </div>
                  </Col>
                  <Col md="4" className="d-flex">
                    <p>Sort By</p>
                    <select onChange={(e) => sortByName(e.target.value)}>
                      <option value="asc">Sort by name (ascending)</option>
                      <option value="desc">Sort by name (descending)</option>
                    </select>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col md="4">
                    <div className="d-flex">
                      <p>Race</p>
                      <Input className="mx-2"></Input>
                    </div>
                  </Col>
                  <Col md="4" className="d-flex">
                    <p>Gender</p>
                    <select value={gender} onChange={handleChange}>
                      <option value="">Male/Female/any</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="any">any</option>
                    </select>
                  </Col>

                  <Col md="1"></Col>
                  <Col md="3">
                    <Button>SUBMIT</Button>
                  </Col>
                </Row>
              </div>
            </section>
            <section style={{ borderBottom: "1px solid gray" }}>
              <ul>
                {sortedItems.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
              <Table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Race</th>
                    <th>Gender</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {map(list, (item, key) => (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.race}</td>
                      <td>{item.gender}</td>
                      <td>
                        <Link to={`/CharacterDetails/${item?._id}`}>
                          <Button>Details </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </section>
            <section className="my-4">
              <Row className="justify-content-between mx-4 align-items-center">
                <Col md="4">
                  <div className="d-flex">
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <BiLeftArrow
                        onClick={() => {
                          // setPages(pages - 1);
                        }}
                      />
                    </div>
                    {/* {map(pageArray, (page) => ( */}
                    <div
                      // onClick={() => setPages(page)}
                      // className={pages === page && "active"}
                      style={{
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                        border: "1px solid gray",
                        padding: "5px 10px",
                        margin: "2px",
                      }}
                    >
                      {/* {page} */}1
                    </div>
                    {/* ))} */}

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <BiRightArrow
                        onClick={() => {
                          // setPages(pages + 1);
                        }}
                      />
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <p>Limit</p>
                </Col>
              </Row>
            </section>
          </Card>
        </Container>
      </Character>
    </div>
  );
};

export default CharacterListing;
