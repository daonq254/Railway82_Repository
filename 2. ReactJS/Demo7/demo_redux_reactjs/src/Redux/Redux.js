// import { createStore } from "redux";
import {
  ADD_ACCOUNT,
  CLOSE_INPUT_FORM,
  DELETE_ACCOUNT,
  SHOW_INPUT_FORM,
} from "./Constants/ActionType";

import { actionCloseForm, actionShowForm } from "./Actions/FormAction";
import { actionAddAccount, actionDeleteAccount } from "./Actions/AccountAction";
// import rootReducer from "./Reducers/rootReducer";
import { store } from "./Store/StoreRedux";
//
// const SHOW_INPUT_FORM = "SHOW_INPUT_FORM";
//
console.log("Demo Redux Core");
// Sử dụng thư viện Redux

// // Bước 3: Khai báo ra các State cần quản lý trong Store
// let initialstate = {
//   showForm: false,
//   listAccount: [],
// };

// // Bước  2: Khai báo Reducer
// let reducer = (state = initialstate, action) => {
//   // Logic
//   switch (action.type) {
//     case SHOW_INPUT_FORM:
//       return {
//         ...state,
//         showForm: true,
//       };

//     case CLOSE_INPUT_FORM:
//       return {
//         ...state,
//         showForm: false,
//       };

//     case ADD_ACCOUNT:
//       // Nhận lại Account cần thêm
//       let account_new = action.accountNew;
//       let listAccountNew = state.listAccount; // Lấy ra listAccount ban đầu
//       listAccountNew.push(account_new); // Thêm Account mới vào list
//       return {
//         ...state,
//         listAccount: listAccountNew,
//       };

//     case DELETE_ACCOUNT:
//       // Nhận lại Account cần thêm
//       let idDelete = action.id; //1
//       let listAccountDelete = state.listAccount; // Lấy ra listAccount ban đầu
//       for (let index = 0; index < listAccountDelete.length; index++) {
//         if (listAccountDelete[index].id === idDelete) {
//           listAccountDelete.splice(index, 1);
//         }
//       }
//       return {
//         ...state,
//         listAccount: listAccountDelete,
//       };
//     default:
//       return {
//         ...state,
//       };
//   }
// };

// Bước 1: Khai báo ra Store để lưu trữ
// let store = createStore(rootReducer);

// Bước 4: Khai báo ra Action để thay đổi giá các State
// let actionShowForm = {
//   type: SHOW_INPUT_FORM,
// };

// let actionCloseForm = {
//   type: CLOSE_INPUT_FORM,
// };

// let actionAddAccount = {
//   type: ADD_ACCOUNT,
//   accountNew: {
//     id: 1,
//     username: "daonq1",
//     fullname: "Nguyễn Đạo",
//   },
// };
let accountNew1 = {
  id: 1,
  username: "daonq1",
  fullname: "Nguyễn Đạo",
};
//
let accountNew2 = {
  id: 2,
  username: "daonq2",
  fullname: "Nguyễn Đạo 2",
};

// let actionAddAccount2 = {
//   type: ADD_ACCOUNT,
//   accountNew: {
//     id: 2,
//     username: "daonq2",
//     fullname: "Nguyễn Đạo 2",
//   },
// };

// let actionDeleteAccount = {
//   type: DELETE_ACCOUNT,
//   id: 1,
// };
// Demo
console.log("Giá trị State ban đầu: ", store.getState());
// Click vào nút CreateNew  ==> Thực hiện đẩy actionShowForm  ==> Store ==> Reducer xử lý ==> đẩy gia trị state showForm về lại giao diện
store.dispatch(actionShowForm());

console.log(
  "Giá trị State Sau khi dispart action :actionShowForm ",
  store.getState()
);

store.dispatch(actionCloseForm());
console.log(
  "Giá trị State Sau khi dispart action :actionCloseForm ",
  store.getState()
);
// Thêm Account mới
store.dispatch(actionAddAccount(accountNew1));
store.dispatch(actionAddAccount(accountNew2));
console.log(
  "Giá trị State Sau khi dispart action :actionAddAccount ",
  store.getState()
);

store.dispatch(actionDeleteAccount(1));
console.log(
  "Giá trị State Sau khi dispart action :actionDeleteAccount ",
  store.getState()
);
