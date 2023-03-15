import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";

class Colorpicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colors: ["red", "yellow", "brown", "green", "blue", "orange", "grey"],
    };
  }

  showColor(color) {
    // console.log(color);
    // console.log(this.props.color);
    return {
      backgroundColor: color,
    };
  }

  setActiveColor(color) {
    // console.log(color);
    this.props.onReceiveColor(color);
  }
  render() {
    var elmColors = this.state.colors.map((color, index) => {
      return (
        <span
          key={index}
          style={this.showColor(color)}
          className={this.props.color === color ? "active" : ""}
          onClick={() => this.setActiveColor(color)}
        ></span>
      );
    });
    return (
      <>
        <Col xs={6} style={{ padding: " 30px" }}>
          <Card>
            <Navbar bg="primary" variant="light">
              <Container>
                <Navbar>Color Picker</Navbar>
              </Container>
            </Navbar>
            <Card body style={{ height: "80px" }}>
              {elmColors}
            </Card>
          </Card>
        </Col>
      </>
    );
  }
}
export default Colorpicker;
