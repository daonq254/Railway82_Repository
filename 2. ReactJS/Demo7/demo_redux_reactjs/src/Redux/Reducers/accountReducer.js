import { ADD_ACCOUNT, DELETE_ACCOUNT } from "../Constants/ActionType";

// Bước 3: Khai báo ra các State cần quản lý trong Store
let initialstate = {
  listAccount: [],
};

// Bước  2: Khai báo Reducer
let accountReducer = (state = initialstate, action) => {
  // Logic
  switch (action.type) {
    case ADD_ACCOUNT:
      // Nhận lại Account cần thêm
      let account_new = action.accountNew;
      let listAccountNew = state.listAccount; // Lấy ra listAccount ban đầu
      listAccountNew.push(account_new); // Thêm Account mới vào list
      return {
        ...state,
        listAccount: listAccountNew,
      };

    case DELETE_ACCOUNT:
      // Nhận lại Account cần thêm
      let idDelete = action.id; //1
      let listAccountDelete = state.listAccount; // Lấy ra listAccount ban đầu
      for (let index = 0; index < listAccountDelete.length; index++) {
        if (listAccountDelete[index].id === idDelete) {
          listAccountDelete.splice(index, 1);
        }
      }
      return {
        ...state,
        listAccount: listAccountDelete,
      };
    default:
      return {
        ...state,
      };
  }
};

export default accountReducer;
