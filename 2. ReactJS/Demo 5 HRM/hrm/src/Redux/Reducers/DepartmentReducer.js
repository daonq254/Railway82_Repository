import { FETCH_DEPARTMENT_LIST } from "../Contants/ActionType";

// Bước 3: Khai báo ra các State cần quản lý trong Store
let initialstate = {
  listDepartment: [],
};

// Bước  2: Khai báo Reducer
let departmentReducer = (state = initialstate, action) => {
  // Logic
  switch (action.type) {
    case FETCH_DEPARTMENT_LIST:
      let listDepartmentAPI = action.payload;
      return {
        ...state,
        listDepartment: listDepartmentAPI,
      };

    default:
      return {
        ...state,
      };
  }
};

export default departmentReducer;
