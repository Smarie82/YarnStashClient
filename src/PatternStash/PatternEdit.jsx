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
      // project: this.props.pattern.project,
      // status: this.props.pattern.status,
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
    //console.log(this.props.pattern.id)
    let id = this.props.pattern.id
    e.preventDefault();
    const token = localStorage.getItem("token");
    // const editProject = this.props.patternEdit.project;
    // const editStatus = this.props.patternEdit.status;
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
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.patternUpdate}>
              <FormGroup>
                <Label htmlFor="project">Edit Project:</Label>
                <Input
                  name="project"
                  defaultValue={this.props.pattern.project}
                  onChange={(e) => this.setState({project : e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="status">Edit Status:</Label>
                <Input
                name="status"
                defaultValue={this.props.pattern.status}
                onChange={(e) => this.setState({status : e.target.value})}
                />
              </FormGroup>
              <Button className="btn-pdf" type="submit">
                Click to Submit Changes
            </Button>{" "}
            
            </Form>
          </ModalBody>
          <ModalFooter>
          
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
     
      </div>
    );

  }
}

export default PatternEdit;
