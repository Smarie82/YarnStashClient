import React, { Component } from 'react'
import { Input, Form, FormGroup, Container, Col, Row, Button } from 'reactstrap';

class YarnSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    SearchYarn(e) {
        e.preventDefault();
        const filterYarn = () => { 
        let result = document.getElementById('search').value.toLowerCase();
        if(result === '') {
            this.props.SearchedYarn([])
        } else {
            let filtered = this.props.yarnCollection.filter(yarn => {
                if (yarn.brand.toLowerCase().includes(result) || yarn.color.toLowerCase().includes(result) || yarn.bin.includes(result)) {
                    return yarn
                }
            })
            this.props.SearchedYarn(filtered)
        }
    }}


    render() { 
        return ( 
            <div>
                <Container>
                <Row>
                    <Col md={3}>
                        <Form className="search-form" onSubmit={this.SearchYarn} id="form" autoComplete="off">
                            <FormGroup>
                                <Input className="body-text" onChange={this.filterYarn} id="search" type="text" placeholder="Search YarnStash" />
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
            </div>
         );
    }
}
 
export default YarnSearch;