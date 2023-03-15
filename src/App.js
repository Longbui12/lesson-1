import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
// import Card from "react-bootstrap/Card";
// import Navbar from "react-bootstrap/Navbar";
// import Button from "react-bootstrap/Button";
import Colorpicker from "./components/ColorPicker";
import SizeSetting from "./components/SizeSetting";
import Reset from "./components/Reset";
import Results from "./components/Results";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red ",
      fontSize: 12,
    };
    // this.onSetColor = this.onSetColor.bind(this);
    // this.onChangeSize = this.onChangeSize.bind(this);
    // this.onSettingDefault = this.onSettingDefault.bind(this);
  }

  onSetColor = (params) => {
    // console.log(params);
    this.setState({
      color: params,
    });
  };
  // ============cách 1=====================//
  // onChangeSize = (value) => {
  //   // 1<= size => 50
  //   // console.log(value);
  //   if (this.state.fontSize + value >= 1 && this.state.fontSize + value <= 50) {
  //     this.setState({
  //       fontSize: this.state.fontSize + value, // value: -1 or 1
  //     });
  //   }
  // };
  // =================================//
  // ============cách 2=====================//
  onChangeSize = (value) => {
    this.setState({
      fontSize:
        this.state.fontSize + value >= 1 && this.state.fontSize + value <= 50
          ? this.state.fontSize + value
          : this.state.fontSize, // value: -1 or 1
    });
  };
  // =================================//

  onSettingDefault = (value) => {
    console.log(value);
    if (value) {
      this.setState = {
        color: "red ",
        fontSize: 12,
      };
    }
  };
  render() {
    return (
      <>
        <Container style={{ padding: " 30px" }}>
          <Row>
            <Colorpicker
              color={this.state.color}
              onReceiveColor={this.onSetColor}
            />
            <Col xs={6} style={{ padding: " 30px" }}>
              <SizeSetting
                fontSize={this.state.fontSize}
                onChangeSize={this.onChangeSize}
              />
              <Reset onSettingDefault={this.onSettingDefault} />
            </Col>
            <Results color={this.state.color} fontSize={this.state.fontSize} />
          </Row>
        </Container>
      </>
    );
  }
}
export default App;
