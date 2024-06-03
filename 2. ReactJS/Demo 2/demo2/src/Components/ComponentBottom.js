// rsf
import React from "react";

function ComponentBottom(props) {
  //
  // let prop_headingBottom = props.prop_headingBottom;
  // Destructuring
  let { prop_headingBottom, prop_other } = props;
  console.log("prop_headingBottom: ", prop_headingBottom);
  return (
    <div className="row">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h3 className="panel-title">{prop_headingBottom}</h3>
          </div>
          <div className="panel-body">
            <textarea className="form-control" rows="5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComponentBottom;
