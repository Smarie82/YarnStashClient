import React from "react";
import PatternDelete from "./PatternDelete";
import PatternEdit from "./PatternEdit";
// import { Card, Container, Row, Col } from "react-bootstrap";
import { Component } from "react";
import {
  Card, CardTitle, CardText, CardDeck,
   CardBody, CardFooter,
} from 'reactstrap';

class PatternTable extends Component{
 constructor(props) {
   super(props);
   this.state = { };
   this.patternMapper = this.patternMapper.bind(this);
 }
  
  patternMapper(pattern) {
    return this.props.index.map((pattern, index) => {
      return (
        <div key={index}  >
          <br />
          
         <CardDeck>

        <Card className="body-text" outline color="info" style={{ width: "15rem" }}>
          <CardBody>
          <CardTitle>
            Pattern: 
             <a target="_blank" rel="noopener noreferrer" href={pattern.project}>{pattern.project}</a>
            </CardTitle>
            <CardText>Status: {pattern.status}</CardText>
            
          </CardBody>
          <CardFooter style={{flex: 2, flexDirection: 'row'}} > 
          <PatternEdit  pattern={pattern} fetchPatterns={this.props.fetchPatterns} /> 
          <PatternDelete  pattern={pattern} />
          </CardFooter>
        </Card>
         </CardDeck>
      
       <br />
      </div>
      );
    });
  }


  render() {

    return (
      <div>
          {this.patternMapper()}
      </div>
    );
  }
  }


export default PatternTable;
