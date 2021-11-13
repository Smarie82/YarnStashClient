import React from 'react';
import "../assets/main.css";
import { Row } from "reactstrap";

const Footer = () => {
    return (
        <footer className="pad-foot">
            <Row>
                <h4 className= "header-line" >&copy; YarnStash <span className='header-line'>2021</span></h4>
            </Row>
        </footer>
    );
};

export default Footer;

