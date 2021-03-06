import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";
import APIURL from "../helpers/environment";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = { fullname: "", email: "", password: "", role: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log("signup submitted");
    event.preventDefault();
    const headers = { "Content-Type": "application/json" };
    const { fullname, email, password, role } = this.state;

    axios

      .post(
        `${APIURL}/user/signup`,
        {
          user: {
            fullname: fullname,
            email: email,
            password: password,
            role: "user",
          },
        },
        { headers }
      )
      .then((response) => {
        console.log(response);
        if (response.data.sessionToken) {
          localStorage.setItem("token", response.data.sessionToken);
        }
        console.log(response.data.sessionToken);
        window.location.href = "/";
        return response.data;
      })
      .catch((error) => {
        console.error("ERROR! Look at it!", error);
      });
  }

  render() {
    return (
      <div>
        <h1 className="header-line">Sign Up</h1>
        <Form onSubmit={this.handleSubmit} inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="fullname" className="mr-sm-2 header-line login-signup-body">
              Full Name
            </Label>
            <Input
              className="body-text"
              onChange={this.handleChange}
              ref={(ref) => {
                this.fullname = ref;
              }}
              type="fullname"
              name="fullname"
              placeholder="Enter your full name here"
              value={this.state.fullname}
              required
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="email" className="mr-sm-2 header-line login-signup-body">
              Email
            </Label>
            <Input
              className="body-text"
              onChange={this.handleChange}
              ref={(ref) => {
                this.email = ref;
              }}
              type="email"
              name="email"
              placeholder="Enter your email here"
              value={this.state.email}
              required
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="password" className="mr-sm-2 header-line login-signup-body">
              Password
            </Label>
            <Input
              className="body-text"
              onChange={this.handleChange}
              ref={(ref) => {
                this.password = ref;
              }}
              type="password"
              name="password"
              placeholder="Enter your password here"
              value={this.state.password}
              required
            />
          </FormGroup>
          <Button size='lg' className="header-line" color="transparent" type="submit">
            Signup
          </Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
