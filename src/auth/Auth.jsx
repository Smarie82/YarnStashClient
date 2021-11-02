import React, { Component } from 'react';
import {Container, Row, Col} from 'reactstrap';
import Signup from './Signup';
import Login from './Login';

class Auth extends Component {
  constructor(props) {
    super(props)
    this.state = { }
    
  }


    render() { 
    return(
      <Container className="auth-container">
         <Row>
              <Col md="6" className="login-col">
                <Login updateToken={this.props.updateToken}/>
              </Col>
              <Col md="6">
                <Signup updateToken={this.props.updateToken}/>
              </Col>
              
         </Row>
     </Container>
    )
  }
}
 
export default Auth;