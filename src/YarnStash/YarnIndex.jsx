import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap';
import axios from 'axios';
import YarnCreate from "../YarnStash/YarnCreate";

class YarnIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { index: [] }
    }

   componentDidMount() {
    const headers = { "Content-Type": "application/json", Authorization: this.props.token };

       axios
       
       .get("http://localhost:3000/yarn/", 
        { headers }
        )
        .then((response) => {
            console.log("res from yarnindex", response);
        })
        .catch((error) => {
            console.error("ERROR! Look at it!", error);
        }); 
    }

    // yarnTable() {
    //     return this.state.index.map((data, i) => {
    //         return <YarnTable obj={data} key={i} />;
    //     })
    // }
    

    render() { 
        return ( 
            <Container>
                <Col>
                    <YarnCreate />
                </Col>
            </Container>
         );
    }
}
 
export default YarnIndex;