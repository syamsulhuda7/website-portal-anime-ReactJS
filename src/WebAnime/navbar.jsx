/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

export default class NavScroll extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      loading: true,
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const inputValue = this.state.input;

    try {
      this.setState({ loading: true });
      const response = await axios.get(
        `https://api.jikan.moe/v4/anime?q=${inputValue}`
      );
      this.props.onSearch(response.data.data);
      //   this.setState({ search: response.data.data });
      //   console.log(response.data.data);
    } catch (error) {
      console.error("error fetching data:", error);
    } finally {
      this.setState({ loading: false });
    }

    this.setState({
      input: "",
    });
  };

  render() {
    return (
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href="#">Anime List</Navbar.Brand>
            <Form onSubmit={this.handleSubmit} className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                name="input"
                value={this.state.input}
                onChange={(e) => this.setState({ input: e.target.value })}
              />
              <Button type="submit" variant="outline-success">
                Search
              </Button>
            </Form>
          </Container>
        </Navbar>
      </>
    );
  }
}
