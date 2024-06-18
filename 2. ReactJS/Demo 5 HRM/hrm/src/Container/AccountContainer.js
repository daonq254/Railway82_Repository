import React from "react";
import CreateButton from "../Components/Account/CreateButton";
import ResutlForm from "../Components/Account/ResutlForm";
import ModalCreateNewAccount from "../Components/Account/ModalCreateNewAccount";

function AccountContainer(props) {
  //
  //
  return (
    <>
      <CreateButton />
      <ModalCreateNewAccount />
      <br /> <br />
      <ResutlForm />
    </>
  );
}

export default AccountContainer;
