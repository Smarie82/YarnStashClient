import React, { Component, useState, useEffect } from 'react'
import { Container, Col, Row } from 'reactstrap';
import axios from 'axios';
import YarnCreate from "../YarnStash/YarnCreate";

const YarnIndex = (props) => {
    const [yarns, setYarns] = useState([]);

    const fetchYarns = () => {
        fetch('http://localhost:3000/yarn/', {
            method: 'GET',
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: props.token,
        })
        }).then(res => res.json())
            .then(yarnData => { setYarns(yarnData); console.log(yarnData) })
    }

    // useEffect(() => {
    //     fetchYarns();
    // })
    
        return ( 
            <Container>
                <Col>
                    <YarnCreate fetchYarns={fetchYarns} token={props.token} />
                </Col>
            </Container>
         );
    
}
 
export default YarnIndex;