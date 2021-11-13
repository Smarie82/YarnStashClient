import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Home";

class PageSwitch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

   

    render() { 
        return ( 
            <div>
                <Switch>
                    <Route exact path="/" />
                    {" "}
                    <Home token={this.props.token} />
                </Switch>
            </div>
         );
    }
}
 
export default PageSwitch;