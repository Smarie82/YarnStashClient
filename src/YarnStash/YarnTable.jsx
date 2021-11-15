import React, { Component } from "react";
import YarnDelete from "./YarnDelete";
import { Card,} from "react-bootstrap";
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
        <br />
        <Card className="body-text" border="info" style={{ width: "18rem" }}>
          <Card.Header>Brand: {yarn.brand}</Card.Header>
          <Card.Body>
            <Card.Text>Color: {yarn.color}</Card.Text>
            <Card.Text>Weight: {yarn.weight}</Card.Text>
            <Card.Text>Length: {yarn.length}</Card.Text>
            <Card.Text>Quantity: {yarn.quantity}</Card.Text>
            <Card.Text>Bin Number: {yarn.bin}</Card.Text>
          </Card.Body>
          <Card.Footer >
          <YarnEdit yarn={yarn} fetchYarns={this.props.fetchYarns} /> 
           <YarnDelete yarn={yarn} />
          </Card.Footer>
        </Card>
        <br />
      </div>
    ));
  }

  render() {
    // console.log(this.props.index);

    return ( <div>{this.yarnMapper()}</div>
   
    )
  }
}

export default YarnTable;
