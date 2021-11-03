import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";


class Login extends Component {


  constructor(props) {
    super(props);

    this.state = { fullname: "", email: "", password: "", sessionToken: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({ email: e.target.value})
  }

  onChangePassword(e) {
    this.setState({ password: e.target.value})
  }

  handleSubmit(event) {
    console.log("login submitted");
    event.preventDefault();
    const { email, password, sessionToken } = this.state;
    const headers = { "Content-Type": "application/json",Authorization: this.props.sessionToken };
   
  

    axios

      .post(
        "http://localhost:3000/user/login",
        {
          user: {
            email: email,
            password: password,
            sessionToken: sessionToken
          },
        },
        { headers }
      )
      .then((response) => {
        console.log(response.data)
        if (response.data.sessionToken) {
          
          localStorage.setItem("token", response.data.sessionToken)
        
        }
        console.log(response.data.sessionToken)
        
       return response.data;
      })
      .catch((error) => {
        console.error("ERROR! Look at it!", error);
      });
    }
  

  render() {
    return (
      <div>
        <h1>Login</h1>
        <Form onSubmit={this.handleSubmit} inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="email" className="mr-sm-2">
              Email
            </Label>
            <Input
              onChange={this.onChangeEmail}
              type="email"
              name="email"
              placeholder="Enter your email here"
              value={this.state.email}
              required
            />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="password" className="mr-sm-2">
              Password
            </Label>
            <Input
              onChange={this.onChangePassword}
              type="password"
              name="password"
              placeholder="Enter your password here"
              value={this.state.password}
              required
            />
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
      </div>
    );
  }
}

export default Login;
