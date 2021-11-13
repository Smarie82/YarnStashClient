import React, { Component } from "react";
import { Button } from "reactstrap";

class YarnDelete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  deleteYarn() {
    const token = localStorage.getItem("token");
    console.log(this.props.yarn);
    fetch(`http://localhost:3000/yarn/delete/${this.props.yarn.id}`, {
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
    console.log(this.props.yarn);
    return (
      <div>
        <Button color="danger" onClick={() => this.deleteYarn()}>
          Delete
        </Button>
      </div>
    );
  }
}

export default YarnDelete;
