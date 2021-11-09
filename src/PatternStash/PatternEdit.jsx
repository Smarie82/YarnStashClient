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
  } from "reactstrap";
  import PatternEditModal from './PatternEditModal';

class PatternEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  patternUpdate(e) {
      e.preventDefault();
    const token = localStorage.getItem("token");
    const editProject = this.props.projectEdit.project;
    const editStatus = this.props.projectEdit.status;
    fetch(
      `http://localhost:3000/pattern/update/${this.props.pattern.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
            pattern: {
                project: editProject,
                status: editStatus,
            }
        }),
        headers: new Headers({
          "Content-Type": "application/json",
          Authorization: token,
        }),
      }
    ).then(() => {
        // this.fetchPatterns();
      console.log();
    //   window.location.reload();
    });
  }

  render() {


    return (
        <div> 
      <Button color="warning" onClick={this.patternUpdate}>
                Update
              </Button>
      </div>
      )
  }
}
                

export default PatternEdit;
