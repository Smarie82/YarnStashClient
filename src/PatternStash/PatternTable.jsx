import React from "react";
import { Table } from "reactstrap";
import PatternCreate from "./PatternCreate";
import PatternDelete from "./PatternDelete";
import PatternEdit from "./PatternEdit";
import { Card, Container, Row, Col } from "react-bootstrap";
import { Button } from 'reactstrap';
import { Component } from "react";

class PatternTable extends Component{
 constructor(props) {
   super(props);
   this.state = { };
   this.patternMapper = this.patternMapper.bind(this);
 }
  
  patternMapper(pattern) {
    return this.props.index.map((pattern, index) => {
      return (
        <div key={index}>
          <Container> 
            <Row md={4}> 
            <Col>
        <Card  border="info" style={{ width: "15rem" }}>
          <Card.Header>Pattern: {pattern.project}</Card.Header>
          <Card.Body>
            <Card.Text>Status: {pattern.status}</Card.Text>
            
          </Card.Body>
          <PatternEdit pattern={pattern} fetchPatterns={this.props.fetchPatterns} /> 
          
          <PatternDelete pattern={pattern} />
          {/* <Button
            color="warning"
          >
            Update
          </Button> */}
        </Card> 
        </Col>
        </Row>
        </Container>
      </div>
      );
    });
  }


  render() {

    return (
      <div>
        {/* <Table>
          <thead>
            <tr>
              <th>Pattern</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
         <tbody>
           {props.patterns.map((pattern, id) => {
             return (
               <tr key={id}>
               <th>{pattern.id}</th>
               <td>{pattern.project}</td>
               <td>{pattern.status}</td>
               <Button id={pattern.id} onClick={e =>props.update(e, pattern)}>Update</Button>
               
               </tr>
               )
              })
            }
         </tbody>
        
        </Table> */}
          {this.patternMapper()}
      </div>
    );
  }
  }


export default PatternTable;
