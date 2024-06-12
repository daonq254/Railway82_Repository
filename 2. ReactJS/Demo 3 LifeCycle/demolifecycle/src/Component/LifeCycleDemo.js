import React, { Component } from "react";

class LifeCycleDemo extends Component {
  // Hàm contructor
  constructor(props) {
    super(props);
    console.log("Hàm constructor được gọi");
    this.state = {
      content: "Hello VTI Academy",
    };
  }
  // Khai báo hàm handleChangeState
  handleChangeState = () => {
    this.setState({
      content: "Hello DAONQ",
    });
  };
  // Hàm Render
  render() {
    console.log("Hàm render được gọi");

    return (
      <div>
        <h3>{this.state.content}</h3>
        <button onClick={this.handleChangeState}>Change State</button>
      </div>
    );
  }

  // Hàm componentDidMount
  componentDidMount() {
    console.log("Hàm componentDidMount được gọi");
  }
  // Hàm componentDidUpdate
  componentDidUpdate() {
    console.log("Hàm componentDidUpdate được gọi");
  }
  //
}

export default LifeCycleDemo;
