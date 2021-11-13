import React, { Component } from 'react';
import YarnIndex from "../YarnStash/YarnIndex.jsx";
import PatternIndex from "../PatternStash/PatternIndex";
import { Container, Col } from "reactstrap";



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

                <h1 className='header-line'>Hello Stitcher!</h1>
                <PatternIndex token={this.props.token} />
                <YarnIndex token={this.props.token}/>

                   </Col>
               </Container>
            </div>
         );
    }
}
 
export default Home;