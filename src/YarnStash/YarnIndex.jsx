import React, { Component } from 'react'
import { Container, Col} from 'reactstrap';
import YarnCreate from "../YarnStash/YarnCreate";
import YarnTable from "../YarnStash/YarnTable";
import APIURL from '../helpers/environment';

class YarnIndex extends Component {
   constructor(props) {
       super(props);
       this.state = { index: "" }
   }

    fetchYarns() {
        const token = localStorage.getItem("token");
        fetch(`${APIURL}/yarn/`, {
            method: 'GET',
            headers: new Headers({
                "Content-Type": "application/json",
                Authorization: token,
        })
        }).then((res) => res.json())
            .then((yarnData) => {
                console.log(yarnData)
                this.setState({ index: yarnData })
            })
    }

    componentDidMount() {
        this.fetchYarns();
    }

        render() { 
        return ( 
            <Container>
                <br />

                <Col>
                    <YarnCreate fetchYarns={this.fetchYarns} />
                    {this.state.index.length > 0 ? <YarnTable index={this.state.index} fetchYarns={this.fetchYarns} /> : null}
                </Col>
            </Container>
         );
    }
}
 
export default YarnIndex;