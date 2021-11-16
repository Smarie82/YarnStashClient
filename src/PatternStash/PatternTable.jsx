import React from "react";
import PatternDelete from "./PatternDelete";
import PatternEdit from "./PatternEdit";
import { Component } from "react";
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

class PatternTable extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.patternMapper = this.patternMapper.bind(this);
  }

  patternMapper(pattern) {
    return this.props.index.map((pattern, index) => {
      return (
         
                <Card 
                 key={index}
                 style={{flex: 1, }}
                  className="body-text"
                  style={{ width: "15rem" }}
                >
                  <CardBody>
                    <CardTitle>
                      <Button
                      className="header-line btn-pattern"
                      size="lg"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={pattern.project} >
                          Project
                      </Button>
                    </CardTitle>
                    <CardText>Notes: {pattern.status}</CardText>
                  </CardBody>
                  <CardFooter style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                    <PatternEdit
                      pattern={pattern}
                      fetchPatterns={this.props.fetchPatterns}
                    />
                    <PatternDelete pattern={pattern} />
                  </CardFooter>
                </Card>
           

       
        
      );
    });
  }

  render() {
    return (
    
        <CardDeck style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>{this.patternMapper()}</CardDeck>
    
    );
  }
}
export default PatternTable;
