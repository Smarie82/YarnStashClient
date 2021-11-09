import React, { Component } from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Modal,
    ModalHeader,
    ModalBody,
  } from "reactstrap";

class PatternEditModal extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Modal isOpen={true}>
        <ModalHeader>Edit Pattern</ModalHeader>
        <ModalBody>
          <Form onSubmit={this.patternUpdate}>
            <FormGroup>
              <Label htmlFor="project">Edit Project:</Label>
              <Input
                name="project"
                value={this.state.project}
                onChange={(e) => this.setState({
                    project: e.target.value,
                })}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor="status">Edit Status:</Label>
              <Input
                name="status"
                value={this.state.status}
                onChange={(e) => this.setState({
                    status: e.target.value,
                })}
              />
            </FormGroup>
          </Form>
        </ModalBody>
      </Modal>
         );
    }
}
 
export default PatternEditModal;