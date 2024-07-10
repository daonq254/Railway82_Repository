// Dừng lại và Call API ở điểm này ==> lấy dữ liệu API(listAccountAPI)
// export let actionFetchListAccoutAPI = () => {
//     return { type: ... };
//   };

import { createNewAccountAPI, getListAccountAPI } from "../../API/AccountApi";
import { FETCH_ACCOUNT_LIST } from "../Contants/ActionType";

// Hiển thị Account
export const actionFetchListAccoutAPI = () => {
  return (dispatch) => {
    return getListAccountAPI().then((listAccountAPI) => {
      dispatch(actionFetchListAccoutRedux(listAccountAPI));
    });
  };
};

//    Đưa thông tin vào trong Reducer để xử lý
export let actionFetchListAccoutRedux = (listAccount_param) => {
  return { type: FETCH_ACCOUNT_LIST, payload: listAccount_param };
};

// Thêm mới account

export const actionAddNewAccountAPI = (accountNew_param) => {
  return (dispatch) => {
    return createNewAccountAPI(accountNew_param).then((res) => {
      dispatch(actionFetchListAccoutAPI());
    });
  };
};

//    Đưa thông tin vào trong Reducer để xử lý
// export let actionAddNewAccountRedux = (accountNew)=> {
//   return { type: FETCH_ACCOUNT_LIST, payload: listAccount_param };
// };
