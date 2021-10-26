import React from 'react';

import { Nav } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Main = () => {

    return (
        <React.Fragment>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path="" component={ "" } />
                    <Route exact path="" component={ "" } />
                    <Route exact path="" component={ "" } />
                    <Route exact path="" component={ "" } />
                </Switch>
            </Router>
        </React.Fragment>
    )
}

export default Main;