import { combineReducers } from "redux";
import LoginReducer from "../reducers/LoginReducer";

export const rootReducer = combineReducers({
  data: LoginReducer,
});
