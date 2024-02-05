import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";

export default class NavScroll extends React.Component {

    state = {
        input: ''
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const inputValue = this.state.input; 
        alert(inputValue);

        this.setState({
            input: ''
        })

        return inputValue
    }

    render() {
    return (
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
              <Button type="submit" variant="outline-success">Search</Button>
            </Form>
        </Container>
      </Navbar>
    );
  }
}
