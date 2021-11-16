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
  }

  handleSubmit(event) {
    event.preventDefault();
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
        window.location.reload()
      });
  }

  render() {
    return (
      <div>
        <br />
        <Form className="body-text" onSubmit={this.handleSubmit}>
          <FormGroup row>

              <h1 className='header-line'>Stash your Patterns here!</h1>
              <br />
              <p className="body-text">
                Fill out the form below to start stashing you patterns!
              </p>
              <br />
            <Label for="project" sm={2}>
              Project Link:
            </Label>
            <Col sm={5}>
              <Input
                type="text"
                name="project"
                value={this.state.project}
                onChange={(e) => this.setState({
                    project: e.target.value,
                  })}
                placeholder="Link to Project Here"
              />
            </Col>
          </FormGroup>
          <br />
          <FormGroup row>
            <Label for="status" sm={2}>
              Project Notes:
            </Label>
            <Col sm={5}>
              <Input
                type="text"
                name="status"
                value={this.state.status}
                onChange={(e) => this.setState({
                    status: e.target.value,
                  })}
                placeholder="Notes for Project Here"
              />
            </Col>
          </FormGroup>
          <br />
          <Button size="lg" className="header-line btn-stash" type="submit">Stash Project!</Button>
          <br />
        </Form>
        <br />
      </div>
    );
  }
}

export default PatternCreate;
