import { combineReducers } from "redux";
import formReducer from "./formReducer";
import accountReducer from "./accountReducer";

let rootReducer = combineReducers({
  showForm_root: formReducer,
  listAccount_root: accountReducer,
});

export default rootReducer;
