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
                <p className="body-text">
                    Here at YarnStash, you are able to enter details of your yarn. If you are needing to get more organized with your yarn collection, you can assign bin numbers (or letters), to your own storage system to help you find and catalog your yarn!
                </p>

                <p className="body-text">
                    You can also save digital patterns that you find online all in one place. No more printing until you are ready to do that project! You can also check your yarn stash to see if you have enough yarn for a project.
                </p>
                <YarnIndex token={this.props.token}/>
                <br />
                <PatternIndex token={this.props.token} />

                   </Col>
               </Container>
            </div>
         );
    }
}
 
export default Home;