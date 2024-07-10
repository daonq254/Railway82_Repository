import { combineReducers } from "redux";
import formReducer from "./FormReducer";
import accountReducer from "./AccountReducer";

const RootReducers = combineReducers({
  form_root: formReducer, //showForm
  account_root: accountReducer,
});

export default RootReducers;
