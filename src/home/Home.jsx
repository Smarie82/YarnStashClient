import React, { Component } from 'react';
import YarnIndex from "../YarnStash/YarnIndex.jsx";
import PatternIndex from "../PatternStash/PatternIndex";
import { Container, Col, Button } from "reactstrap";
import { Link } from 'react-router-dom';



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
                <br />
                <h3 className="body-text">
                    Here at YarnStash, you are able to enter details of your yarn. If you are needing to get more organized with your yarn collection, you can assign bin numbers to your own storage system to help you catalog and find your yarn! YarnStash can also help you determine if you have enough yarn for a project. 
                </h3>
                <br />
                <h3 className="body-text">
                    You can also save digital patterns that you find online all in one place. No more printing until you are ready to do that project! You can also check your yarn stash to see if you have enough yarn for a project.
                </h3>
                <br />
                <h3 className="body-text">
                    To get started with your stash, select which stash you want to start and fill out the form with details of your yarn or post the link to a digital pattern you want to keep track of. 
                </h3>
               

                   </Col>
               </Container>
               <br />
               <Link to="/yarnindex">
                <Button className="home-btn header-line" size='lg'>
                    My YarnStash
                </Button>
                </Link>
                <Link to="/patternindex" >
                <Button className="home-btn header-line" size='lg' >
                    My PatternStash
                </Button>
                </Link>
            </div>

         );
    }
}
 
export default Home;