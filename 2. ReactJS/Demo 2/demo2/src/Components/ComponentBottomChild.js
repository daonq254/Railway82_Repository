import React from "react";

function ComponentBottomChild(props) {
  let { prop_datafromAppToBottomChild } = props;
  return (
    <div>
      <h3>This is ComponentBottomChild</h3>
      <h4>{prop_datafromAppToBottomChild}</h4>
    </div>
  );
}

export default ComponentBottomChild;
