import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function InputForm(props) {
  //
  let {
    onHandleCreateNewAccount,
    // , listDepartment, listPosition
  } = props;
  // Khai báo state lưu dữ liệu cho các ô nhập liệu
  let [Email, setEmail] = useState("");
  let [Username, SetUsername] = useState("");
  let [Fullname, SetFullname] = useState("");
  let [Department, SetDepartment] = useState("");
  let [Postion, SetPostion] = useState("");

  // console.log("listPosition: ", listPosition);
  // Hàm xử lý sự kiện khi nhấn nút Create
  let handleCreate = () => {
    // console.log("Bạn vừa nhập vào Email là: ", Email);
    // console.log("Bạn vừa nhập vào Username là: ", Username);
    // console.log("Bạn vừa nhập vào Fullname là: ", Fullname);
    // console.log("Bạn vừa nhập vào Department là: ", Department);
    // console.log("Bạn vừa nhập vào Postion là: ", Postion);
    let accountNew = {
      // id: 1,
      email: Email,
      username: Username,
      fullname: Fullname,
      departmentId: Department,
      positionId: Postion,
      // createDate: "2024-06-19",
    };

    //   {
    //     "email": "daonq123_New@viettel.com",
    //     "username": "daonq123_New",
    //     "fullname": "daonq_New",
    //     "departmentId": "3",
    //     "positionId": "3"
    // }

    onHandleCreateNewAccount(accountNew);
  };
  //
  let stateRedux = useSelector((state) => state);
  let listDepartmentRedux = stateRedux.department_root.listDepartment;
  // let departmentItems = "";
  let departmentItems = listDepartmentRedux.map((dep, index) => {
    return <option value={dep.id}>{dep.name}</option>;
  });
  //
  let listPositionRedux = stateRedux.positon_root.listPosition;

  let positionItem = listPositionRedux.map((position, index) => {
    return (
      <option value={position.id} key={index}>
        {position.name}
      </option>
    );
  });

  // let positionItem = "";

  return (
    <>
      <Form>
        {/* Email */}
        <FormGroup>
          <Label for="Email">Email: </Label>
          <Input
            id="Email"
            name="Email"
            placeholder="Input Email"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            value={Email}
          />
        </FormGroup>

        {/* Username */}
        <FormGroup>
          <Label for="Username">Username: </Label>
          <Input
            id="Username"
            name="Username"
            placeholder="Input Username"
            type="text"
            value={Username}
            onChange={(event) => {
              SetUsername(event.target.value);
            }}
          />
        </FormGroup>

        {/* Fullname */}
        <FormGroup>
          <Label for="Fullname">Fullname: </Label>
          <Input
            id="Fullname"
            name="Fullname"
            placeholder="Input Fullname"
            type="text"
            value={Fullname}
            onChange={(event) => {
              SetFullname(event.target.value);
            }}
          />
        </FormGroup>

        {/* Department */}
        <FormGroup>
          <Label for="Department">Select a Department: </Label>
          <Input
            id="Department"
            name="Department"
            type="select"
            value={Department}
            onChange={(event) => {
              SetDepartment(event.target.value);
            }}
          >
            {departmentItems}
            {/* <option value={"Bán hàng"}>Bán hàng</option>
            <option value={"Bảo vệ"}>Bảo vệ</option>
            <option value={"Giám đốc"}>Giám đốc</option>
            <option value={"Kỹ thuật"}>Kỹ thuật</option>
            <option value={"Marketing"}>Marketing</option> */}
          </Input>
        </FormGroup>

        {/* Postion */}
        <FormGroup>
          <Label for="Postion">Select a Postion: </Label>
          <Input
            id="Postion"
            name="Postion"
            type="select"
            value={Postion}
            onChange={(event) => {
              SetPostion(event.target.value);
            }}
          >
            {positionItem}
            {/* <option value={"Dev"}>Dev</option>
            <option value={"Test"}>Test</option>
            <option value={"Scrum_Master"}>Scrum_Master</option>
            <option value={"PM"}>PM</option> */}
          </Input>
        </FormGroup>
      </Form>
      {/* Nút xử lý */}
      <Button color="primary" onClick={handleCreate}>
        Create
      </Button>
      <Button color="danger">Reset</Button>
    </>
  );
}

export default InputForm;
