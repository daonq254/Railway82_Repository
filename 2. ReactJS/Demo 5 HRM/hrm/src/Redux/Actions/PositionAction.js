import { getListPositionAPI } from "../../API/PositionAPI";
import {
  FETCH_DEPARTMENT_LIST,
  FETCH_POSITION_LIST,
} from "../Contants/ActionType";

export const actionFetchListPositionAPI = () => {
  return (dispatch) => {
    return getListPositionAPI().then((listPositionAPI) => {
      dispatch(actionFetchListPositionRedux(listPositionAPI));
    });
  };
};

//    Đưa thông tin vào trong Reducer để xử lý
export let actionFetchListPositionRedux = (listPosition_param) => {
  return { type: FETCH_POSITION_LIST, payload: listPosition_param };
};
