import React from "react";
import { useParams } from "react-router-dom";

function AccountDetail(props) {
  let param = useParams();
  let idparam = param.id;
  console.log("idparam: ", idparam);
  return <div>Account Detail</div>;
}

export default AccountDetail;
