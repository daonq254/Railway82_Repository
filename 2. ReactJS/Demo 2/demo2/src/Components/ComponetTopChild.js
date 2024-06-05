import React, { Component } from "react";

class ComponetTopChild extends Component {
  render() {
    let { prop_datafromAppToTopChild } = this.props;
    console.log("prop_datafromAppToTopChild: ", prop_datafromAppToTopChild);
    return (
      <div>
        <h3>This is ComponetTopChild</h3>
        <h4>{prop_datafromAppToTopChild}</h4>
      </div>
    );
  }
}

export default ComponetTopChild;
