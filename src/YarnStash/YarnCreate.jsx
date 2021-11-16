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


class YarnCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: "",
      color: "",
      weight: "",
      length: "",
      quantity: "",
      bin: "",
      stitcher: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //   });
  // }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    const token = localStorage.getItem("token");

    fetch(`${APIURL}/yarn/create`, {
      method: "POST",
      body: JSON.stringify({
        yarn: {
          brand: this.state.brand,
          color: this.state.color,
          weight: this.state.weight,
          length: this.state.length,
          quantity: this.state.quantity,
          bin: this.state.bin,
          stitcher: this.state.stitcher,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    })
      .then((res) => res.json())
      .then((yarnData) => {
        console.log(yarnData);
        window.location.reload()
      });
  }

  render() {
    return (
      <div>
        <br />
        <Form className="body-text" onSubmit={this.handleSubmit}>
          <FormGroup row>
            <br />
            <h1 className="header-line">Stash your Yarn here!</h1>
            <br />
            <p className="body=text">
              Fill out the form below to start stashing your yarn!
            </p>
            <br />
            <Label  for="brand" sm={2}>
              Yarn Brand:
            </Label>
            <Col sm={5}>
              <Input
                type="text"
                name="brand"
                value={this.state.brand}
                onChange={(e) => this.setState({
                  brand: e.target.value,
                })}
                placeholder="Yarn Brand here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="color" sm={2}>
              Yarn Color:
            </Label>
            <Col sm={5}>
              <Input
                type="text"
                name="color"
                value={this.state.color}
                onChange={(e) => this.setState({
                  color: e.target.value,
                })}
                placeholder="Yarn Color Here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="weight" sm={2}>
              Yarn Weight:
            </Label>
            <Col sm={5}>
              <Input
                type="select"
                name="weight"
                value={this.state.weight}
                onChange={(e) => this.setState({
                  weight: e.target.value,
                })}
              >
                <option>0 - Lace</option>
                <option>1 - Super Fine</option>
                <option>2 - Fine</option>
                <option>3 - Light Worsted</option>
                <option>4 - Worsted</option>
                <option>5 - Bulky</option>
                <option>6 - Super Bulky</option>
                <option>7 - Jumbo</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="length" sm={2}>
              Yarn Length:
            </Label>
            <Col sm={5}>
              <Input
                type="number"
                name="length"
                value={this.state.length}
                onChange={(e) => this.setState({
                  length: e.target.value,
                })}
                placeholder="Length of Skein Here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="quantity" sm={2}>
              Yarn Quantity:
            </Label>
            <Col sm={5}>
              <Input
                type="number"
                name="quantity"
                value={this.state.quantity}
                onChange={(e) => this.setState({
                  quantity: e.target.value,
                })}
                placeholder="Quantity of Skiens Here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="bin" sm={2}>
              Storage Bin:
            </Label>
            <Col sm={5}>
              <Input
                type="number"
                name="bin"
                value={this.state.bin}
                onChange={(e) => this.setState({
                  bin: e.target.value,
                })}
                placeholder="Bin Assignment Here - Insert 0 for no assignment"
              />
            </Col>
          </FormGroup>
          <br />
          <Button size="lg" className="header-line btn-stash" type="submit">Stash Yarn!</Button>
          <br />
        </Form>
        <br />
      </div>
    
    );
  }
}

export default YarnCreate;
