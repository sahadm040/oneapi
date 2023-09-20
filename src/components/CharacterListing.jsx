import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";
import { allCharacters } from "../store/api/character.route";
import { map, range } from "lodash";
import { Link } from "react-router-dom";
import Character from "../pages/Character";
import Select from "react-select";

const CharacterListing = () => {
  const [characterListView, setCharacterListView] = useState();
  const [limit, setLimit] = useState();
  const [pages, setPages] = useState(1);
  const [sort, setSort] = useState("");
  const [list, setList] = useState();
  const [gender, setGender] = useState("");
  const [race, setRace] = useState([""]);
  console.log("race", race);

  console.log("gender", gender);

  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(allCharacters({ limit, pages, sort, name: search, gender, race }));
  }, [dispatch, limit, pages, sort, search, gender, race]);

  const HandleSubmit = (e) => {
    e.preventDefault();
  };
  const { characterViewObject } = useSelector((state) => state.character);
  console.log("characterViewObject", characterViewObject.docs);
  useEffect(() => {
    setCharacterListView(characterViewObject);
    setList(characterViewObject?.docs);
  }, [characterViewObject]);
  console.log("character", characterListView);
  // const totalPages = Math.ceil(characterListView?.total / limit);
  const totalPages = characterListView?.pages;
  console.log("totalPages", totalPages);
  const pageArray = range(1, totalPages + 1);

  const handleChange = (e) => {
    setGender(e.target.value);
  };
  const handleChangeLimit = (e) => {
    setLimit(e.target.value);
  };
  const handleChangeSort = (e) => {
    setSort(e.target.value);
  };
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  };
  const options = [
    { value: "Hobbit", label: "Hobbit" },
    { value: "Human", label: "Human" },
    { value: "Elf", label: "Elf" },
    { value: "Maiar", label: "Maiar" },
    { value: "Dragons", label: "Dragons" },
    { value: "Ainur", label: "Ainur" },
    { value: "Dwarf", label: "Dwarf" },
  ];
  const handleChanges = (selectedOptions) => {
    const selectedValuesArray = selectedOptions.map((option) => option.value);
    setRace(selectedValuesArray);
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
              <h6>Characters </h6>
            </header>
            <Form onSubmit={HandleSubmit}>
              <section style={{ borderBottom: "1px solid gray" }}>
                <div className="m-3">
                  <Row className="baseline">
                    <Col md="6">
                      <div className="d-flex baseline">
                        <p>Search</p>
                        <Input
                          className="mx-2"
                          type="text"
                          name="name"
                          placeholder=""
                          onChange={handleChangeSearch}
                        />
                      </div>
                    </Col>
                    <Col md="2"></Col>
                    <Col md="4" className="d-flex baseline ">
                      <p>Sort By</p>
                      <select
                        className="mx-2"
                        value={sort}
                        onChange={handleChangeSort}
                      >
                        <option value="">sort name by</option>
                        <option value="asc">asc</option>
                        <option value="desc">desc</option>
                      </select>
                    </Col>
                  </Row>
                  <Row className="mt-2 baseline">
                    <Col md="4">
                      <div className="d-flex baseline">
                        <p>Race</p>
                        <Select
                          className="px-2"
                          isMulti
                          options={options}
                          value={options.filter((option) =>
                            race.includes(option.value)
                          )}
                          onChange={handleChanges}
                        />
                      </div>
                    </Col>
                    <Col md="4" className="d-flex baseline">
                      <p>Gender</p>
                      <select
                        className="mx-2"
                        value={gender}
                        onChange={handleChange}
                      >
                        <option value="">Male/Female/any</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="male">male</option>
                        <option value="female">Female</option>
                        <option value="">any</option>
                      </select>
                    </Col>

                    <Col md="1"></Col>
                    <Col md="3">
                      <Button type="submit">SUBMIT</Button>
                    </Col>
                  </Row>
                </div>
              </section>
            </Form>
            <section style={{ borderBottom: "1px solid gray" }}>
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
                          <Button className="btn btn-success">Details </Button>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </section>
            <section className="my-4">
              <Row className="justify-content-between mx-4 align-items-center">
                <Col md="8">
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
                          setPages(pages - 1);
                        }}
                        size={25}
                      />
                    </div>
                    {map(pageArray.slice(0, 10), (page, key) => (
                      <div
                        key={key}
                        onClick={() => setPages(page)}
                        className={pages === page && "active"}
                        style={{
                          display: "flex",
                          alignContent: "center",
                          justifyContent: "center",
                          border: "1px solid gray",
                          borderRadius: "6px",
                          padding: "5px 10px",
                          margin: "2px",
                        }}
                      >
                        {page}
                      </div>
                    ))}

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <BiRightArrow
                        onClick={() => {
                          setPages(pages + 1);
                        }}
                        size={25}
                      />
                    </div>
                  </div>
                </Col>
                <Col md="4">
                  <div className="d-flex baseline">
                    <p className="mx-2">Limit</p>
                    <select value={limit} onChange={handleChangeLimit}>
                      <option value="10">10</option>
                      <option value="20">20</option>
                      <option value="50">50</option>
                    </select>
                  </div>
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
