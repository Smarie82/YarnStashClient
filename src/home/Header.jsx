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
                        <h1 className='header-line header-font-size'>A place to catalog and organize your yarn and patterns!</h1>
                        <p className="body-text body-font-size">
                            YarnStash is a place where you can finally get your yarn organized and have one place to keep all of the patterns you want to do! With this App, you can catalog your yarn by brand, color, weight, length and quanitity of skeins with a storage bin assignment so that you know where your yarn is to avoid spending time digging through your stash.  
                        </p>
                        <p className="body-text body-font-size">
                            Do you have an endless amount of digital patterns? YarnStash also allows you to save links to patterns with a your own note about the project!
                        </p>
                        <h3 className="header-line body-font-size">
                            Sign up today to start your stash! Happy stashing!
                        </h3>
                        <br />
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default Header;