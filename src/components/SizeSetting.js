import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

class SizeSetting extends Component {
  changeSize(value) {
    // console.log(value);
    this.props.onChangeSize(value);
  }
  render() {
    return (
      <>
        <Card>
          <Navbar bg="warning" variant="light">
            <Container>
              <Navbar>size: {this.props.fontSize} px</Navbar>
            </Container>
          </Navbar>
          <Card body>
            <Button variant="primary" onClick={() => this.changeSize(1)}>
              Tăng
            </Button>{" "}
            <Button variant="success" onClick={() => this.changeSize(-1)}>
              Giảm
            </Button>
          </Card>
        </Card>
      </>
    );
  }
}
export default SizeSetting;
