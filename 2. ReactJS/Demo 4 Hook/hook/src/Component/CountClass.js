import React, { Component } from "react";

class CountClass extends Component {
  // Khai báo State Count

  //   Viết hàm xử lý khi Click vào nút Click

  render() {
    return (
      <div className="container">
        <div class="row">
          <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <button type="button" class="btn btn-danger">
              Click
            </button>
          </div>

          <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <h4>Bạn đã click x lần</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default CountClass;
