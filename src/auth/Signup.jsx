import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Redirect } from 'react-router-dom'
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = { fullname: "", email: "", password: "", role: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    // this.state = { redirect: false };
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
        "http://localhost:3000/user/signup",
        {
          user: {
            fullname: fullname,
            email: email,
            password: password,
            role: role
          },
        },
        { headers }
      )
      .then((response) => {
        console.log(response);
        if (response.data.sessionToken) {
          const { user, sessionToken } = response.data
          localStorage.setItem("token", JSON.stringify(sessionToken))
          localStorage.setItem("user", JSON.stringify(user));

        }
        console.log(response.data.sessionToken)
        
       return response.data;
      })
      .catch((error) => {
        console.error("ERROR! Look at it!", error);
      })
      // .then(() => this.setState({ redirect: true }));
  }

  render() {
    // const { redirect } =this.state;
    //   if (redirect) {
    //     return <Redirect to='/home' />
    //   }
    return (
      <div>
        <h1>Sign Up</h1>
        <Form onSubmit={this.handleSubmit} inline>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Label for="fullname" className="mr-sm-2">
              Full Name
            </Label>
            <Input
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
            <Label for="email" className="mr-sm-2">
              Email
            </Label>
            <Input
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
            <Label for="password" className="mr-sm-2">
              Password
            </Label>
            <Input
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
          <Button type="submit">Signup</Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
