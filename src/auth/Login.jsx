import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import "../assets/main.css";
import APIURL from "../helpers/environment";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log("login submitted");
    event.preventDefault();
    const { email, password, sessionToken } = this.state;
    const headers = {
      "Content-Type": "application/json",
      Authorization: this.props.sessionToken,
    };

    axios

      .post(
        `${APIURL}/user/login`,
        {
          user: {
            email: email,
            password: password,
            sessionToken: sessionToken,
          },
        },
        { headers }
      )
      .then((response) => {
        console.log(response.data);
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
        <h1 className="header-line">Login</h1>
        <Form onSubmit={this.handleSubmit} inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="email" className="mr-sm-2 header-line">
              Email
            </Label>
            <Input
              className="body-text"
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Enter your email here"
              value={this.state.value}
              required
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="password" className="mr-sm-2 header-line">
              Password
            </Label>
            <Input
              className="body-text"
              onChange={this.handleChange}
              type="password"
              name="password"
              placeholder="Enter your password here"
              value={this.state.value}
              required
            />
          </FormGroup>

          <Button type="submit" color="transparent" className="header-line">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default withRouter(Login);
