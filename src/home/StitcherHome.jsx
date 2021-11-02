import React, { Component } from 'react';
import YarnIndex from "../YarnStash/YarnIndex.jsx";
import PatternCreate from "../PatternStash/PatternCreate";



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
                <PatternCreate token={this.state.token} />
            </div>
         );
    }
}
 
export default Home;