import { FETCH_POSITION_LIST } from "../Contants/ActionType";

// Bước 3: Khai báo ra các State cần quản lý trong Store
let initialstate = {
  listPosition: [],
};

// Bước  2: Khai báo Reducer
let positionReducer = (state = initialstate, action) => {
  // Logic
  switch (action.type) {
    case FETCH_POSITION_LIST:
      let listPositonAPI = action.payload;
      return {
        ...state,
        listPosition: listPositonAPI,
      };

    default:
      return {
        ...state,
      };
  }
};

export default positionReducer;
