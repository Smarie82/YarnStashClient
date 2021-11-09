import React, { Component } from 'react'
import {  Button } from "reactstrap";

class PatternDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    deletePattern() {
        const token = localStorage.getItem("token");
        console.log(this.props.pattern)
        fetch(`http://localhost:3000/pattern/delete/${this.props.pattern.id}`, {
                method: "DELETE",
                headers: new Headers({
                        "Content-Type": "application/json",
                        Authorization: token,
                    })
                }).then(() => 
                {console.log()
                window.location.reload()}
                );
            }

    render() { 
        console.log(this.props.pattern)
        return ( <div>
            <Button
              color="danger"
              onClick={() => this.deletePattern()}
            >
              Delete
            </Button>
           
        </div> );
    }
}
 
export default PatternDelete;