import React, { Component } from 'react'
import PatternCreate from './PatternCreate';
class PatternIndex extends Component {
    constructor(props) {
        super(props);
        this.state = { index: "" }  
    }

    fetchPatterns() {
        const token = localStorage.getItem("token");
        fetch("http://localhost:3000/pattern/", {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: token,
            })
        }).then((response) => response.json())
        .then((patternData) => {
            console.log(patternData)
            this.setState({ index: patternData.message })
        })
    };

    componentDidMount() {
        this.fetchPatterns();
    }

    render() { 
        return ( 
            <div>
                <PatternCreate fetchPatterns={this.fetchPatterns} />
            </div>
         );
    }
}
 
export default PatternIndex;