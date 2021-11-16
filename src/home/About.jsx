import React from 'react';
import { Container } from 'reactstrap';
import pen from '../assets/BWPen.JPG';

const About = (props) => {
    return(
        <div>
            <Container>
            <h1 className="header-line">
                Hello Stitcher! 
            </h1>
                <br />
            <h4 className="body-text">
            YarnStash was created in hopes to help other yarn hoarders to get more organized and make it easier to plan a project. 
            </h4>
            <br />
            <p className="body-text">
                I started crocheting in 2018 after my husband gave me a crochet kit for Christmas. I began teaching myself how to crochet and quickly discovered that it was more than a hobby, it helped reduce stress and gave me a great feeling of creating something. I have made fun amigurumi for gifts and have created my own crochet patterns. I have my own Etsy shop and Instagram dedicated to my self-teaching crochet journey. 
            </p>
            <p className="body-text">
                So, how did I get to creating YarnStash? In 2021, I made a decision for a career change to get out of customer service retail management. Now, I am heading into a path of Web Development and look forward to this new journey!
            </p>
            <h4 className="header-line">
                If you would like to get to know me more, follow me on social media! I look forward to sharing my journey with you!
            </h4>
            <h3 className="header-line">
                ~The Last Yarnicorn
            </h3>
            <img className="pen-img" src={pen} alt="pen"></img>
            </Container>
        </div>
    )
}

export default About;