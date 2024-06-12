import React from "react";
import { useState, useEffect } from "react";

function CountFunction(props) {
  // Khai báo State Count1 trong function Component
  const [Count1, setCount1] = useState(0);
  const [Count2, setCount2] = useState(0);

  // Hàm xử lý sự kiện khi nhấn vào nút Click 1
  let handeClick1 = () => {
    setCount1(Count1 + 1);
  };

  // Hàm xử lý sự kiện khi nhấn vào nút Click 2
  let handeClick2 = () => {
    setCount2(Count2 + 1);
  };
  // Khai báo 1 useEffect
  //   let f = () => {
  //     console.log("Bạn vừa gọi tới đoạn Code1 trong userEffect");
  //   };

  useEffect(() => {
    console.log("Bạn vừa gọi tới đoạn Code 1 trong userEffect");
  }, [Count1, Count2]);

  useEffect(() => {
    console.log("Bạn vừa gọi tới đoạn Code 2 trong userEffect");
  }, [Count2]);

  //
  useEffect(() => {
    //
    return () => {
      console.log("Đoạn code tương đương với ComponentWillUnmount");
    };
  });
  //
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <button
            type="button"
            className="btn btn-danger"
            onClick={handeClick1}
          >
            Click 1
          </button>
          <br />
          <button
            type="button"
            className="btn btn-danger"
            onClick={handeClick2}
          >
            Click 2
          </button>
        </div>

        <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <h4>Bạn đã click vào button Click 1: {Count1} lần</h4>
          <h4>Bạn đã click vào button Click 2: {Count2} lần</h4>
        </div>
      </div>
    </div>
  );
}

export default CountFunction;
