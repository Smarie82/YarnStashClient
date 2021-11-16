import React, { Component } from "react";
import YarnDelete from "./YarnDelete";
import YarnEdit from "./YarnEdit";
import { Button,
  Card,
  CardTitle,
  CardText,
  CardDeck,
  CardBody,
  CardFooter,
  Row,
  Col,
  Container,
} from "reactstrap";

class YarnTable extends Component {
  constructor(props) {
    super(props);
    this.state = { yarn: "" };
    this.yarnMapper = this.yarnMapper.bind(this);
  }

  yarnMapper() {
    return this.props.index.map((yarn, index) => (
      
        <Card key={index} className="body-text" outline color="info" style={{ width: "18rem" }}>
          <CardBody>
          <CardText>Brand: {yarn.brand}</CardText>
            <CardText>Color: {yarn.color}</CardText>
            <CardText>Weight: {yarn.weight}</CardText>
            <CardText>Length: {yarn.length}</CardText>
            <CardText>Quantity: {yarn.quantity}</CardText>
            <CardText>Bin Number: {yarn.bin}</CardText>
          </CardBody>
          <CardFooter style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }} >
          <YarnEdit yarn={yarn} fetchYarns={this.props.fetchYarns} /> 
           <YarnDelete yarn={yarn} />
          </CardFooter>
        </Card>
       
    ));
  }

  render() {
    return (
    <CardDeck style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>{this.yarnMapper()}</CardDeck>
    )
  }
}

export default YarnTable;
