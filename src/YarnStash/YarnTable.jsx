import React, { Component } from "react";
import { Button, Container, Row, Col, Table } from "reactstrap";
import YarnCreate from "./YarnCreate";
import YarnDelete from "./YarnDelete";
import { Card, CardGroup } from "react-bootstrap";
import YarnEdit from "./YarnEdit";

class YarnTable extends Component {
  constructor(props) {
    super(props);
    this.state = { yarn: "" };
    this.yarnMapper = this.yarnMapper.bind(this);
  }

  yarnMapper() {
    return this.props.index.map((yarn, index) => (
      <div key={index}>
        
        <Card border="info" style={{ width: "18rem" }}>
          <Card.Header>Brand: {yarn.brand}</Card.Header>
          <Card.Body>
            <Card.Text>Color: {yarn.color}</Card.Text>
            <Card.Text>Weight: {yarn.weight}</Card.Text>
            <Card.Text>Length: {yarn.length}</Card.Text>
            <Card.Text>Quantity: {yarn.quantity}</Card.Text>
            <Card.Text>Bin Number: {yarn.bin}</Card.Text>
          </Card.Body>
          <YarnDelete yarn={yarn} />
          <YarnEdit yarn={yarn} fetchYarns={this.props.fetchYarns} /> 
        </Card>
    
      </div>
    ));
  }

  render() {
    console.log(this.props.index);

    return ( <div>{this.yarnMapper()}</div>
   
    )
  }
}

export default YarnTable;
