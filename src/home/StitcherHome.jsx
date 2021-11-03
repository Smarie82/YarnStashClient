import React, { Component } from 'react';
import YarnIndex from "../YarnStash/YarnIndex.jsx";
import PatternIndex from "../PatternStash/PatternIndex";
import { Route, Switch } from 'react-router';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { home: ""}
    }
    render() { 
        return ( 
            <div>
               

                <h1>Stitcher Home</h1>
                <YarnIndex token={this.props.token}/>
                <PatternIndex token={this.props.token} />

            </div>
         );
    }
}
 
export default Home;