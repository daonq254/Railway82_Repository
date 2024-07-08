import { createStore } from "redux";
import RootReducers from "../Reducers/RootReducer";

const storeRedux = createStore(RootReducers);

export default storeRedux;
