import { combineReducers } from "redux";
import LoginReducer from "../reducers/LoginReducer";
import { RestaurantReducer } from "../reducers/RestaurantReducer";

export const rootReducer = combineReducers({
  data: LoginReducer,
  selectedRestaurant: RestaurantReducer,
});
