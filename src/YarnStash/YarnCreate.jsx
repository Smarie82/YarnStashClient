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

    fetch("http://localhost:3000/yarn/create", {
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
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <h1>Stash your Yarn here!</h1>
            <Label for="brand" sm={2}>
              Yarn Brand
            </Label>
            <Col sm={10}>
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
              Yarn Color
            </Label>
            <Col sm={10}>
              <Input
                type="text"
                name="color"
                value={this.state.color}
                onChange={(e) => this.setState({
                  color: e.target.value,
                })}
                placeholder="yarn color here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="weight" sm={2}>
              Yarn Weight
            </Label>
            <Col sm={10}>
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
              Yarn Length
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="length"
                value={this.state.length}
                onChange={(e) => this.setState({
                  length: e.target.value,
                })}
                placeholder="Yarn length here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="quantity" sm={2}>
              Yarn Quantity
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="quantity"
                value={this.state.quantity}
                onChange={(e) => this.setState({
                  quantity: e.target.value,
                })}
                placeholder="quantity of skiens here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="bin" sm={2}>
              Storage Bin:
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="bin"
                value={this.state.bin}
                onChange={(e) => this.setState({
                  bin: e.target.value,
                })}
                placeholder="bin assignment here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
              File
            </Label>
            <Col sm={10}>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above
                input. It's a bit lighter and easily wraps to a new line.
              </FormText>
            </Col>
          </FormGroup>
          <Button type="submit">Stash Yarn!</Button>
        </Form>
        
      </div>
    
    );
  }
}

export default YarnCreate;
