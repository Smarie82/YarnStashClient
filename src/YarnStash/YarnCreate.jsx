import React, { Component, useState } from "react";
import axios from "axios";
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from "reactstrap";

const YarnCreate = (props) => {
  const [brand, setBrand] = useState("");
  const [color, setColor] = useState("");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [quantity, setQuantity] = useState("");
  const [bin, setBin] = useState("");
  const [stitcher, setStitcher] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/yarn/create", {
      method: "POST",
      body: JSON.stringify({
        yarn: {
          brand: brand,
          color: color,
          weight: weight,
          length: length,
          quantity: quantity,
          bin: bin,
          stitcher: stitcher,
        },
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token,
      }),
    })
      .then((res) => res.json())
      .then((yarnData) => {
        console.log(yarnData);
        setBrand("");
        setColor("");
        setWeight("");
        setLength("");
        setQuantity("");
        setBin("");
        setStitcher("");
        props.fetchYarns();
      });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormGroup row>
          <Label for="brand" sm={2}>
            Yarn Brand
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="brand"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              placeholder="Yarn Brand here"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="color" sm={2}>
            Yarn Color
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              placeholder="yarn color here"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="weight" sm={2}>
            Yarn Weight
          </Label>
          <Col sm={10}>
            <Input
              type="select"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
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
            Yarn Length
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="length"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="Yarn length here"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="quantity" sm={2}>
            Yarn Quantity
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="quantity of skiens here"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="bin" sm={2}>
            Storage Bin:
          </Label>
          <Col sm={10}>
            <Input
              type="number"
              name="bin"
              value={bin}
              onChange={(e) => setBin(e.target.value)}
              placeholder="bin assignment here"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleFile" sm={2}>
            File
          </Label>
          <Col sm={10}>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              This is some placeholder block-level help text for the above
              input. It's a bit lighter and easily wraps to a new line.
            </FormText>
          </Col>
        </FormGroup>
        <Button type="submit">Stash Yarn!</Button>
      </Form>
    </div>
  );
};

export default YarnCreate;
