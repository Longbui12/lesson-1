import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class Results extends Component {
  setStyle() {
    return {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.fontSize,
    };
  }
  render() {
    return (
      <>
        <Col xs={12}>
          <p>
            Color: {this.props.color} - FontSize : {this.props.fontSize}px
          </p>
          <Card>
            <Card body id="content" style={this.setStyle()}>
              NỘI DUNG SETTING
            </Card>
          </Card>
        </Col>
      </>
    );
  }
}
export default Results;
