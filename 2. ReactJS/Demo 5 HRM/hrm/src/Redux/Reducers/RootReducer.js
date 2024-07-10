import { combineReducers } from "redux";
import formReducer from "./FormReducer";
import accountReducer from "./AccountReducer";
import departmentReducer from "./DepartmentReducer";
import positionReducer from "./PositionReducer";

const RootReducers = combineReducers({
  form_root: formReducer, //showForm
  account_root: accountReducer,
  department_root: departmentReducer,
  positon_root: positionReducer,
});

export default RootReducers;
