import { FETCH_ACCOUNT_LIST } from "../Contants/ActionType";

// Bước 3: Khai báo ra các State cần quản lý trong Store
let initialstate = {
  listAccount: [],
};

// Bước  2: Khai báo Reducer
let accountReducer = (state = initialstate, action) => {
  // Logic
  switch (action.type) {
    case FETCH_ACCOUNT_LIST:
      let listAccountAPI = action.payload;
      return {
        ...state,
        listAccount: listAccountAPI,
      };

    // case ADD_NEW_ACCOUNT:
    //   let accountNew = action.payload;
    //   let listAccount_new = state.listAccount;
    //   listAccount_new.push(accountNew);
    //   return {
    //     ...state,
    //     listAccount: listAccount_new,
    //   };

    default:
      return {
        ...state,
      };
  }
};

export default accountReducer;
