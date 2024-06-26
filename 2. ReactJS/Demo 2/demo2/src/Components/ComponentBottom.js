// rsf
import React from "react";
import ComponentBottomChild from "./ComponentBottomChild";

function ComponentBottom(props) {
  //
  // let prop_headingBottom = props.prop_headingBottom;
  // Destructuring
  let {
    prop_headingBottom,
    prop_other,
    prop_dataTopToBottom,
    prop_datafromAppToBottomChild,
  } = props;
  console.log("prop_headingBottom: ", prop_headingBottom);
  //

  console.log("prop_dataTopToBottom: ", prop_dataTopToBottom);
  // Khai báo hàm handleClickSentToApp
  let handleClickSentToApp = () => {
    //
    let myClassVTI = "Railway82";
    props.prop_getDataFromBottom(myClassVTI);
  };
  //
  return (
    <div className="row">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h3 className="panel-title">{prop_headingBottom}</h3>
          </div>
          <div className="panel-body">
            <textarea
              className="form-control"
              rows="5"
              value={prop_dataTopToBottom}
            />
          </div>
          prop_dataTopToBottom
          <button
            type="button"
            class="btn btn-success"
            onClick={handleClickSentToApp}
          >
            Sent Data To App
          </button>
        </div>
        {/*  */}
        <ComponentBottomChild
          prop_datafromAppToBottomChild={prop_datafromAppToBottomChild}
        />
      </div>
    </div>
  );
}

export default ComponentBottom;
