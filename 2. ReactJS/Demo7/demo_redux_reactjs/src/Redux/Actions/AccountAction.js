import { ADD_ACCOUNT, DELETE_ACCOUNT } from "../Constants/ActionType";

// export let actionAddAccount = {
//   type: ADD_ACCOUNT,
//   accountNew: {
//     id: 1,
//     username: "daonq1",
//     fullname: "Nguyễn Đạo",
//   },
// };

// let actionAddAccount2 = {
//     type: ADD_ACCOUNT,
//     accountNew: {
//       id: 2,
//       username: "daonq2",
//       fullname: "Nguyễn Đạo 2",
//     },
//   };

export let actionAddAccount = (accountNew_input) => {
  return { type: ADD_ACCOUNT, accountNew: accountNew_input };
};

export let actionDeleteAccount = (accountID_del) => {
  return { type: DELETE_ACCOUNT, id: accountID_del };
};
