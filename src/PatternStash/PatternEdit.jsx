import React, { Component } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import APIURL from '../helpers/environment';

class PatternEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle = (e) => {
    this.setState({ modal: !this.state.modal })
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }


  patternUpdate = (e) => {
    let id = this.props.pattern.id
    e.preventDefault();
    const token = localStorage.getItem("token");
    fetch(`${APIURL}/pattern/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        pattern: {
          project: this.state.project,
          status: this.state.status,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    }).then((res) => {
      //this.props.fetchPatterns();
      this.toggle();
      console.log();
      window.location.reload();
    });
  }

  render() {

    return (
      <div>
        <Button color="info" className='header-line btn-update' onClick={this.toggle}>Update</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} >
          
          <ModalBody className="body-text">
            <Form onSubmit={this.patternUpdate}>
              <FormGroup row>
                <Label for="project">Edit Pattern Link:</Label>
                <Input
                  name="project"
                  defaultValue={this.props.pattern.project}
                  onChange={(e) => this.setState({project : e.target.value})}
                />
              </FormGroup>
              <br />
              <FormGroup row>
                <Label for="status">Edit Notes:</Label>
                <Input
                name="status"
                defaultValue={this.props.pattern.status}
                onChange={(e) => this.setState({status : e.target.value})}
                />
              </FormGroup>
              <br />
              <Button size="lg" className="header-line btn-update" type="submit">
                Click to Submit Changes
            </Button>{" "}
            
            </Form>
          </ModalBody>
          <ModalFooter>
    
            <Button className="header-line btn-delete" color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );

  }
}

export default PatternEdit;
