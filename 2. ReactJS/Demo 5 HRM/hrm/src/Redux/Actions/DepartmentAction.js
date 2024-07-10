import { getListDepartmentAPI } from "../../API/Department";
import { FETCH_DEPARTMENT_LIST } from "../Contants/ActionType";

export const actionFetchListDepartmentAPI = () => {
  return (dispatch) => {
    return getListDepartmentAPI().then((listDepartmentAPI) => {
      dispatch(actionFetchListDepartmentRedux(listDepartmentAPI));
    });
  };
};

//    Đưa thông tin vào trong Reducer để xử lý
export let actionFetchListDepartmentRedux = (listDepartment_param) => {
  return { type: FETCH_DEPARTMENT_LIST, payload: listDepartment_param };
};
