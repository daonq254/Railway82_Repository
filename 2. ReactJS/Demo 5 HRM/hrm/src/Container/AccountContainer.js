import React, { useEffect, useState } from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResutlForm from "../Components/Account/ResutlForm";
import ModalCreateNewAccount from "../Components/Account/ModalCreateNewAccount";

function AccountContainer(props) {
  // Khai báo state showForm để quản lý ẩn hiện của Modal
  let [showForm, setShowForm] = useState(false);
  // Khai báo State ListAccount để quản lý danh sách Account đang có trên hệ thống
  let [listAccount, setListAccount] = useState([]);

  // Khai báo hàm callback để hiển thị modal
  let onHandleCreateButton = () => {
    // console.log("CLICK");
    setShowForm(true);
  };
  // Khai báo hàm callback để đóng Modal
  let onHandleCloseModal = () => {
    //
    setShowForm(false);
  };
  // Khai báo hàm callback để tạo mới Account
  let onHandleCreateNewAccount = (account_New) => {
    //
    // console.log("account_New: ", account_New);
    listAccount.push(account_New);
    setListAccount(listAccount);

    // Lưu listAccount xuống LocalStorage
    localStorage.setItem("listAccount", JSON.stringify(listAccount));
    // Đóng form thêm mới
    setShowForm(false);
  };
  // load dữ liệu từ LocalStorage vào state listAccount, load 1 lần trong chương trình
  useEffect(() => {
    let listAccount_LocalStorage = JSON.parse(
      localStorage.getItem("listAccount")
    );
    setListAccount(listAccount_LocalStorage);
  }, []);

  return (
    <>
      <CreateButton onHandleCreateButton={onHandleCreateButton} />
      <ModalCreateNewAccount
        showForm={showForm}
        onHandleCloseModal={onHandleCloseModal}
        onHandleCreateNewAccount={onHandleCreateNewAccount}
      />
      <br /> <br />
      <ResutlForm listAccount={listAccount} />
    </>
  );
}

export default AccountContainer;
