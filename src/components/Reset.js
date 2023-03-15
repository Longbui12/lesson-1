import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

class Reset extends Component {
  constructor(props) {
    super(props);
    this.onResetDefault = this.onResetDefault.bind(this);
  }

  onResetDefault() {
    this.props.onSettingDefault("OK đã reset");
  }

  render() {
    return (
      <>
        <Button
          variant="danger"
          style={{ marginTop: "20px" }}
          onClick={this.onResetDefault}
        >
          Reset
        </Button>
      </>
    );
  }
}
export default Reset;
