import React, { Component } from 'react'
import { Container, Row, Col } from "reactstrap";
import "../assets/main.css";
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Container>
                    <Row>
                        <Col>
                        <h1 className='header-line header-font-size'>A place to catalog and organize your yarns and patterns!</h1>
                        <p className="body-text body-font-size">
                            YarnStash is a place where you can finally get your yarn organized and have one place to keep all of the patterns you want to do (even though we all know it's wishful thinking)! With this system, you can catalog your yarn by brand, color, weight, length and quanitity of skeins with a storage bin assignment so that you know what you have so you are not spending time digging through your stash.  
                        </p>
                        <p className="body-text body-font-size">
                            Do you have an endless amount of patterns that you have found online with no way to keep track of them? YarnStash also allows you to save links to patterns with a status or note about the project!
                        </p>
                        <p className="body-text body-font-size">
                            Sign up today to start your stash! Happy stashing!
                        </p>
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default Header;