import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import InputForm from "./InputForm";
import { useSelector } from "react-redux";

function ModalCreateNewAccount(props) {
  let {
    showForm,
    onHandleCloseModal,
    onHandleCreateNewAccount,
    // listDepartment,
    // listPosition,
  } = props;

  //
  let handleClose = () => {
    onHandleCloseModal();
  };
  // Gọi lại state đang lưu trữ trong redux để xử lý
  let stateRedux = useSelector((state) => state);
  console.log("stateRedux: ", stateRedux);
  let showForm_redux = stateRedux.form_root.showForm;

  return (
    <>
      <Modal isOpen={showForm_redux}>
        <ModalHeader>
          <h3>Create New Account</h3>
        </ModalHeader>
        <ModalBody>
          <InputForm
            onHandleCreateNewAccount={onHandleCreateNewAccount}
            // listDepartment={listDepartment}
            // listPosition={listPosition}
          />
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={handleClose}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalCreateNewAccount;
