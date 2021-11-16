import React from 'react';
import { Container, Col, Row } from 'reactstrap';

import pen from '../assets/BWPen.JPG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub, faEtsy } from '@fortawesome/free-brands-svg-icons';

const About = (props) => {
    return(
        <div>
            <Container>
            <h1 className="header-line">
                Hello Stitcher! 
            </h1>
                <br />
            <h4 className="body-text">
            YarnStash was created in hopes to help yarn hoarders to get more organized and make it easier to plan a project. 
            </h4>
            <br />
            <p className="body-text">
                I started crocheting in 2018 after my husband gave me a crochet kit for Christmas. I began teaching myself how to crochet and quickly discovered that it was more than a hobby, it helped reduce stress and gave me a great feeling of creating something. I have made fun amigurumi for gifts, useful items and have created my own crochet patterns. I have an Etsy shop and Instagram dedicated to my self-teaching crochet journey. 
            </p>
            <p className="body-text">
                So, how did I get to creating YarnStash? In 2021, I made a decision for a career change to get out of customer service retail management. Now, I am heading into a path of Web Development and look forward to this new journey!
            </p>
            <Row> 
            <Col> 
            <img className="pen-img" src={pen} alt="pen" ></img>
            </Col>
            
            </Row>
            <Row> 
            <Col sm={12}> 
                <br />
            <h4 className="header-line signature">
                If you would like to get to know me more, follow me on social media! I look forward to sharing my journey with you!
            </h4>
            <h3 className="header-line signature">
                ~The Last Yarnicorn
            </h3>
            </Col>
            <Col className="brand-icon-align"> 
            <br />
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/stephanie-marie-falls-developer/">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="brand-icons" /></a>

            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/thelastyarnicorn/">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="brand-icons" /></a>

            <a target="_blank" rel="noreferrer"  href='https://github.com/Smarie82'> <FontAwesomeIcon icon={faGithub} size="2x" className="brand-icons" /></a>
            
            <a target="_blank" rel="noreferrer" href="https://www.etsy.com/shop/TheLastYarnicorn?ref=seller-platform-mcnav">
            <FontAwesomeIcon icon={faEtsy} size="2x" className="brand-icons" /></a>
            </Col>
            </Row>
            </Container>
        </div>
    )
}

export default About;