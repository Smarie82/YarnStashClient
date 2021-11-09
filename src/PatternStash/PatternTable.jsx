import React from "react";
import { Table, Button, Container, Row, Col } from "reactstrap";
import PatternCreate from "./PatternCreate";
import PatternDelete from "./PatternDelete";
import PatternEdit from "./PatternEdit";

class PatternTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pattern: [], project: "", status: "", stitcher: "" };
    // this.patternMapper = this.patternMapper.bind(this);
  }

  patternMapper() {
    return this.props.index.map((pattern, index) => {
      return (
        <tr key={index}>
          <th scope="row">{PatternCreate.id}</th>
          <td>{pattern.project}</td>
          <td>{pattern.status}</td>
          <td>
            {/* {pattern.id ? <PatternDelete pattern={pattern} fetchPatterns={this.props.fetchPatterns} /> : "hello"}  */}
            <PatternDelete pattern={pattern} />
           <PatternEdit />
          </td>
        </tr>
      );
    });
  }

  render() {
    console.log(this.props.index);

    return (
      <div>
        <Table>
          <thead>
            <tr className="font-table">
              <th>Pattern Stash</th>
            </tr>
          </thead>
          <tbody>{this.patternMapper()}</tbody>
        
        </Table>
      </div>
    );
  }
}

export default PatternTable;
