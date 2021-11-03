import React, { Component } from "react";
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from "reactstrap";

class PatternCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { project: "", status: "", stitcher: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    const token = localStorage.getItem("token");

    fetch("http://localhost:3000/pattern/create", {
      method: "POST",
      body: JSON.stringify({
        pattern: {
          project: this.state.project,
          status: this.state.status,
          stitcher: this.state.stitcher,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    })
      .then((response) => response.json())
      .then((patternData) => {
        console.log(patternData);
      });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <Label for="project" sm={2}>
              Project
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="project"
                value={this.state.project}
                onChange={this.handleChange}
                placeholder="Project goes here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="status" sm={2}>
              Project Status
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="status"
                value={this.state.status}
                onChange={this.handleChange}
                placeholder="Status of Project goes here"
              />
            </Col>
          </FormGroup>
          <Button type="submit">Stash Project!</Button>
        </Form>
      </div>
    );
  }
}

export default PatternCreate;
