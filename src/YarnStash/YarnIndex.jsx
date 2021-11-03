import React, { Component, useState, useEffect } from 'react'
import { Container, Col, Row } from 'reactstrap';

import YarnCreate from "../YarnStash/YarnCreate";

class YarnIndex extends Component {
   constructor(props) {
       super(props);
       this.state = { index: "" }
   }

    fetchYarns() {
        const token = localStorage.getItem("token");
        fetch('http://localhost:3000/yarn/', {
            method: 'GET',
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: token,
        })
        }).then(res => res.json())
            .then((yarnData) => {
                console.log(yarnData)
                this.setState({ index: yarnData.message })
            })
    }

    componentDidMount() {
        this.fetchYarns();
    }

        render() { 
        return ( 
            <Container>
                <Col>
                    <YarnCreate fetchYarns={this.fetchYarns} />
                </Col>
            </Container>
         );
    }
}
 
export default YarnIndex;