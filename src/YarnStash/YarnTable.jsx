import React, { Component } from "react";
import { Table, Button, Container, Row, Col } from "reactstrap";
import YarnCreate from "./YarnCreate";
import YarnDelete from "./YarnDelete";

class YarnTable extends Component {
  constructor(props) {
    super(props);
    this.state = { yarn: "" };
    this.yarnMapper = this.yarnMapper.bind(this);
  }

  yarnMapper() {
    return this.props.index.map((yarn, index) => (
      <tr key={index}>
        <th scope="row">{YarnCreate.id}</th>
        <td>{yarn.brand}</td>
        <td>{yarn.color}</td>
        <td>{yarn.weight}</td>
        <td>{yarn.length}</td>
        <td>{yarn.quantity}</td>
        <td>{yarn.bin}</td>
        <td>
          <YarnDelete yarn={yarn} />
          <Button
            color="warning"
            onClick={() => {
              this.props.editUpdateYarn(yarn);
              this.props.updateOn();
            }}
          >
            Update
          </Button>
        </td>
      </tr>
    ));
  }

  render() {
    console.log(this.props.index);

    return (
      <div>
        <Table>
          <thead>
            <tr className="font-table">
              <th>Yarn Stash</th>
            </tr>
          </thead>
          <tbody>{this.yarnMapper()}</tbody>
        </Table>
      </div>
    );
  }
}

export default YarnTable;
