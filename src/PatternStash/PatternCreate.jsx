import React, { Component } from "react";
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import APIURL from '../helpers/environment';

class PatternCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { project: "", status: "", stitcher: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

//   handleChange(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    const token = localStorage.getItem("token");

    fetch(`${APIURL}/pattern/create`, {
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
        //this.props.fetchPatterns()
        window.location.reload()
      });
  }

  render() {
    return (
      <div>
        <Form className="body-text" onSubmit={this.handleSubmit}>
          <FormGroup row>
              <h1 className='header-line'>Stash your Patterns here!</h1>
            <Label for="project" sm={2}>
              Project
            </Label>
            <Col sm={5}>
              <Input
                type="text"
                name="project"
                value={this.state.project}
                onChange={(e) => this.setState({
                    project: e.target.value,
                  })}
                placeholder="Project goes here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="status" sm={2}>
              Project Status
            </Label>
            <Col sm={5}>
              <Input
                type="text"
                name="status"
                value={this.state.status}
                onChange={(e) => this.setState({
                    status: e.target.value,
                  })}
                placeholder="Status of Project goes here"
              />
            </Col>
          </FormGroup>
          <Button className="header-line btn-stash" type="submit">Stash Project!</Button>
        </Form>
      </div>
    );
  }
}

export default PatternCreate;
