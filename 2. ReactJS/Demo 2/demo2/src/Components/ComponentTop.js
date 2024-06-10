import React, { Component } from "react";
import ComponetTopChild from "./ComponetTopChild";

class ComponentTop extends Component {
  // Khai báo hàm contructor
  constructor(props) {
    super(props);
    this.state = {
      inputData: "", // Khai náo State để lưu trữ dữ liệu cho ô input
      // click_Number: 0,
    };
  }

  // Khai báo biến lưu số lần click vào nút SentData
  //   clickNumber = 0;
  // khai báo hàm sử lý sự kiện khi người dùng nhấn nút SentData
  handleClick = () => {
    // this.clickNumber = this.clickNumber + 1;
    // console.log("clickNumber: ", this.clickNumber);
    // let x = this.state.click_Number;
    // this.setState({
    //   click_Number: this.state.click_Number + 1,
    // });
    // console.log("click_Number: ", this.state.click_Number);
    // Khai báo 1 dữ liệu bất kỳ
    console.log(
      "Dữ liệu người dùng vừa nhập trong ô Input: ",
      this.state.inputData
    );

    let myNameVTI = "DAONQ VTI Academy!!! ";
    this.props.prop_getDataFromTop(this.state.inputData);
  };
  // Khai báo hàm xử lý sự kiện khi người dùng nhập liệu

  handleChange = (event) => {
    // console.log("event: ", event);
    // console.log("event.target.value: ", event.target.value);
    this.setState({
      inputData: event.target.value,
    });
  };
  // render
  render() {
    // Gọi dữ liệu từ App truyền xuống để sử dụng
    // let prop_dataFromAppToTop = this.props.prop_dataFromAppToTop; // "DAONQ VTI Academy"
    // let prop_headingTop = this.props.prop_headingTop;
    // ... Destructuring
    let {
      prop_dataFromAppToTop,
      prop_headingTop,
      prop_myName,
      prop_dataTopToBottom,
      prop_datafromAppToTopChild,
    } = this.props;
    //
    // console.log("prop_dataFromAppToTop: ", prop_dataFromAppToTop);
    // console.log("prop_headingTop: ", prop_headingTop);
    // console.log("prop_myName: ", prop_myName);
    //
    return (
      <>
        {/* Giao diện Component 1 */}
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            {/* Panel */}
            <div className="panel panel-success">
              <div className="panel-heading">
                <h3 className="panel-title">{prop_headingTop}</h3>
              </div>
              <div className="panel-body">
                <div className="row">
                  <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <input
                      type="text"
                      className="form-control"
                      onChange={this.handleChange}
                      // value={this.state.click_Number}
                    />
                  </div>
                  <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={this.handleClick}
                    >
                      Sent Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ComponetTopChild
                prop_datafromAppToTopChild={prop_datafromAppToTopChild}
              />
            </div>
            {/*  */}
          </div>
        </div>
        {/* Giao diện thêm */}
        <div>
          <h3>My Name DaoNQ</h3>
        </div>
      </>
    );
  }
}
//

export default ComponentTop;
