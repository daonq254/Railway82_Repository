import React from "react";
import { Table, Button } from "reactstrap";
import ResultFormItem from "./ResultFormItem";

function ResutlForm(props) {
  let { listAccount } = props;
  return (
    <>
      <h3>Danh Sách Account</h3>
      <Table hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Username</th>
            <th>Fullname</th>
            <th>Department</th>
            <th>Position</th>
            <th>Cretate Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <ResultFormItem listAccount={listAccount} />
        </tbody>
      </Table>
    </>
  );
}

export default ResutlForm;
