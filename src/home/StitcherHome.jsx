import React, { Component } from 'react';
import YarnIndex from "../YarnStash/YarnIndex.jsx";
import PatternIndex from "../PatternStash/PatternIndex";
import { Route, Switch } from 'react-router';
import { Table, Button, Container, Row, Col } from "reactstrap";



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { home: ""}
    }
    render() { 
        return ( 
            <div>
               <Container>
                   <Col>

                <h1>Stitcher Home</h1>
                <YarnIndex token={this.props.token}/>
                <PatternIndex token={this.props.token} />

                   </Col>
               </Container>
            </div>
         );
    }
}
 
export default Home;