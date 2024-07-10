import React from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";

function ResultFormItem(props) {
  // let { listAccount } = props;  // Đang được lấy từ state trên Container
  let stateRedux = useSelector((state) => state);
  let listAccount_redux = stateRedux.account_root.listAccount;
  // Hiển thị dữ liệu: sử dụng vòng lặp map(account, index)  ==> tạo ra 1 mảng mới từ mảng ban đầu
  let items = listAccount_redux.map((account, index) => {
    return (
      <tr>
        <td>{account.id}</td>
        <td>{account.email}</td>
        <td>{account.username}</td>
        <td>{account.fullname}</td>
        <td>{account.department}</td>
        <td>{account.position}</td>
        <td>{account.createDate}</td>
        <td>
          <Button color="warning">Edit</Button>
        </td>
        <td>
          <Button color="warning">Delete</Button>
        </td>
      </tr>
    );
  });
  //
  return items;
  // <>
  //   <tr>
  //     <td>1</td>
  //     <td>daonq@viettel.com.vn</td>
  //     <td>daonq</td>
  //     <td>Nguyen Dao</td>
  //     <td>Sale</td>
  //     <td>Dev</td>
  //     <td>2022-02-22</td>
  //     <td>
  //       <Button color="warning">Edit</Button>
  //     </td>
  //     <td>
  //       <Button color="warning">Delete</Button>
  //     </td>
  //   </tr>
  // </>
}

export default ResultFormItem;
