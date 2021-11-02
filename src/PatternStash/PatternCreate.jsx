import React, { Component, useState } from 'react';
import {
    Col,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Button,
  } from "reactstrap";

const PatternCreate =(props) => {
   const [project, setProject] = useState("");
   const [status, setStatus] = useState("");
   const [stitcher, setStitcher] = useState("");

   const handleSubmit = (e) => {
       e.preventDefault();
       fetch("http://localhost:3000/pattern/create", {
           method: "POST",
           body: JSON.stringify({
               pattern: {
                   project: project,
                   status: status, 
                   stitcher: stitcher,
               },
           }),
           headers: new Headers({
            "Content-Type": "application/json",
            Authorization: props.token,
           }),
       })
       .then((res) => res.json())
       .then((patternData) => {
         console.log(patternData);
         setProject("");
         setStatus("");
         setStitcher("");
         props.fetchProjects();
       });
   }
    
        return ( 
            <div>
                <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="brand" sm={2}>
           Project
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="project"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="Project goes here"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="color" sm={2}>
            Project Status
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Status of Project goes here"
            />
          </Col>
        </FormGroup>
        <Button type="submit">Stash Project!</Button>
        </Form>
            </div>
         );
    
}
 
export default PatternCreate;