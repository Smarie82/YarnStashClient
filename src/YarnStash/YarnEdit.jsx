import React, { Component } from "react";
import {
  Button,
  Col,
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

class YarnEdit extends Component {
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


  yarnUpdate = (e) => {
    
    let id = this.props.yarn.id
    e.preventDefault();
    const token = localStorage.getItem("token");
    // const editProject = this.props.patternEdit.project;
    // const editStatus = this.props.patternEdit.status;
    fetch(`${APIURL}/yarn/update/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        pattern: {
          brand: this.state.brand,
          color: this.state.color,
          weight: this.state.weight,
          quantity: this.state.quantity,
          bin: this.state.bin,
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
            <Form onSubmit={this.yarnUpdate}>
              <FormGroup>
                <Label htmlFor="brand">Edit Brand:</Label>
                <Input
                  name="brand"
                  defaultValue={this.props.yarn.brand}
                  onChange={(e) => this.setState({brand : e.target.value})}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="color">Edit Color:</Label>
                <Input
                name="status"
                defaultValue={this.props.yarn.color}
                onChange={(e) => this.setState({color : e.target.value})}
                />
              </FormGroup>
              <FormGroup row>
            <Label for="weight" sm={2}>
              Edit Weight:
            </Label>
            <Col sm={10}>
              <Input
                type="select"
                name="weight"
                defaultValue={this.props.yarn.weight}
                onChange={(e) => this.setState({weight: e.target.value})}
              >
                <option>0 - Lace</option>
                <option>1 - Super Fine</option>
                <option>2 - Fine</option>
                <option>3 - Light Worsted</option>
                <option>4 - Worsted</option>
                <option>5 - Bulky</option>
                <option>6 - Super Bulky</option>
                <option>7 - Jumbo</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="length" sm={2}>
              Edit Length:
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="length"
                defaultValue={this.props.yarn.length}
                onChange={(e) => this.setState({
                  length: e.target.value,
                })}
                placeholder="Yarn length here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="quantity" sm={2}>
              Edit Quantity:
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="quantity"
                defaultValue={this.props.yarn.quantity}
                onChange={(e) => this.setState({
                  quantity: e.target.value,
                })}
                placeholder="quantity of skiens here"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="bin" sm={2}>
              Edit Bin:
            </Label>
            <Col sm={10}>
              <Input
                type="number"
                name="bin"
                defaultValue={this.state.bin}
                onChange={(e) => this.setState({
                  bin: e.target.value,
                })}
                placeholder="bin assignment here"
              />
            </Col>
          </FormGroup>
              <Button className="btn-pdf" type="submit">
                Submit Changes
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

export default YarnEdit;
