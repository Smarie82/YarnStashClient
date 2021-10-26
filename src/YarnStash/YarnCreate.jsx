import React, { Component } from 'react';
import axios from 'axios';
import {
    Col, Form, FormGroup, Label, Input, FormText, Button
  } from 'reactstrap';

class YarnCreate extends Component {
    constructor(props) {
        super(props);
       
        this.state = { brand: "", color: "", weight: "", length: "", quantity: "",  bin: "", stitcher: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleBrandChange = this.handleBrandChange.bind(this);
        this.handleColorChange = this.handleColorChange.bind(this);
        this.handleWeightChange = this.handleWeightChange.bind(this);
        this.handleLengthChange = this.handleLengthChange.bind(this);
        this.handleQuantityChange = this.handleQuantityChange.bind(this);
        this.handleBinChange = this.handleBinChange.bind(this);

    }

    handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value,
        });
      }

      handleBrandChange(event) {
        this.setState({
          brand: event.target.value
        });
      };

      handleColorChange(event) {
        this.setState({
          color: event.target.value
        });
      };

      handleWeightChange(event) {
        this.setState({
          weight: event.target.value
        });
      };

      handleLengthChange(event) {
        this.setState({
          length: event.target.value
        });
      };

      handleQuantityChange(event) {
        this.setState({
          quantity: event.target.value
        });
      };

      handleBinChange(event) {
        this.setState({
          bin: event.target.value
        });
      };
    
      handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
        const headers = { "Content-Type": "application/json", Authorization: this.props.token };
        
        axios
        
        .post(
          "http://localhost:3000/yarn/create", this.state,
          { headers }
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.error(error);
          });       
          
          
        }
        
        
        render() { 
      const { brand, color, weight, length, quantity, bin} = this.state
        return ( 
        <div>
           <Form onSubmit={this.handleSubmit}>
      <FormGroup row>
        <Label for="brand" sm={2}>Yarn Brand</Label>
        <Col sm={10}>
          <Input type="text" name="brand" value={brand} onChange={this.handleChange} id="example" placeholder="Yarn Brand here" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="color" sm={2}>Yarn Color</Label>
        <Col sm={10}>
          <Input type="text" name="color" value={color} onChange={this.handleChange} id="example" placeholder="yarn color here" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="weight" sm={2}>Yarn Weight</Label>
        <Col sm={10}>
          <Input type="select" name="weight" value={weight} onChange={this.handleChange} id="exampleSelect">
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
        <Label for="length" sm={2}>Yarn Length</Label>
        <Col sm={10}>
          <Input type="number" name="length" value={length} onChange={this.handleChange} id="example" placeholder="Yarn length here" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="quantity" sm={2}>Yarn Quantity</Label>
        <Col sm={10}>
          <Input type="number" name="quantity" value={quantity} onChange={this.handleChange} id="exampleQuantity" placeholder="quantity of skiens here" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="bin" sm={2}>Storage Bin:</Label>
        <Col sm={10}>
          <Input type="number" name="bin" value={bin} onChange={this.handleChange} id="" placeholder="bin assignment here"/>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label for="exampleFile" sm={2}>File</Label>
        <Col sm={10}>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
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