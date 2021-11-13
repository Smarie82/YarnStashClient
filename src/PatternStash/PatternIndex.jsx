import React, { Component } from 'react'
import { Container, Col } from 'reactstrap';
import PatternCreate from './PatternCreate';
import PatternTable from "./PatternTable";
class PatternIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { index: {} }  
    }

    fetchPatterns() {
        const token = localStorage.getItem("token");
        fetch("http://localhost:3000/pattern/getAll", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: token,
            })
        }).then((response) => response.json())
        .then((patternData) => {
            console.log(patternData)
            this.setState({ index: patternData })
        })
    };

    componentDidMount() {
        this.fetchPatterns();
    }

    render() { 
        return ( 
            <div>
                <Container>
                    <Col>
                <PatternCreate fetchPatterns={this.fetchPatterns} />
                {this.state.index.length > 0 ? 
                <PatternTable index={this.state.index} fetchPatterns={this.fetchPatterns} /> : null}
                
                    </Col>
                </Container>
            </div>
         );
    }
}
 
export default PatternIndex;