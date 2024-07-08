import { combineReducers } from "redux";
import formReducer from "./FormReducer";

const RootReducers = combineReducers({
  form_root: formReducer, //showForm
});

export default RootReducers;
