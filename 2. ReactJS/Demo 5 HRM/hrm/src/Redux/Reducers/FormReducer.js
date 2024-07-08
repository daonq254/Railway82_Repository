import { CLOSE_INPUT_FORM, SHOW_INPUT_FORM } from "../Contants/ActionType";

// Bước 3: Khai báo ra các State cần quản lý trong Store
let initialstate = {
  showForm: false,
  abc: "daonq",
  xzy: 10,
};

// Bước  2: Khai báo Reducer
let formReducer = (state = initialstate, action) => {
  // Logic
  switch (action.type) {
    case SHOW_INPUT_FORM:
      return {
        ...state,
        showForm: true,
      };

    case CLOSE_INPUT_FORM:
      return {
        ...state,
        showForm: false,
      };

    default:
      return {
        ...state,
      };
  }
};

export default formReducer;
