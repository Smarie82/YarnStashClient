import React, { Component } from 'react'
import {  Button } from "reactstrap";
import APIURL from '../helpers/environment';

class PatternDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    deletePattern() {
        const token = localStorage.getItem("token");
        // console.log(this.props.pattern)
        fetch(`${APIURL}/pattern/delete/${this.props.pattern.id}`, {
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
        // console.log(this.props.pattern)
        return ( <div>
            <Button
            className='header-line btn-delete'
              color="danger"
              onClick={() => this.deletePattern()}
            >
              Delete
            </Button>
           
        </div> );
    }
}
 
export default PatternDelete;