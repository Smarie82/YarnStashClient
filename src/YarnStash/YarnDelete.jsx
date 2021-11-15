import React, { Component } from "react";
import { Button } from "reactstrap";
import APIURL from '../helpers/environment';

class YarnDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteYarn() {
    const token = localStorage.getItem("token");
    // console.log(this.props.yarn);
    fetch(`${APIURL}/yarn/delete/${this.props.yarn.id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: token,
      }),
    }).then(() => {
      console.log();
      window.location.reload();
    });
  }

  render() {
    // console.log(this.props.yarn);
    return (
      <div>
        <Button className='header-line btn-delete' color="danger" onClick={() => this.deleteYarn()}>
          Delete
        </Button>
      </div>
    );
  }
}

export default YarnDelete;
