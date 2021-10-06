import { ACTION_TYPE } from "../actions/ActionTypes";

const INITIAL_STATE = {
  selectedRestaurant: {},
};

export const RestaurantReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_SELECTED_RESTAURANT:
      return { ...action.value };
    case ACTION_TYPE.ADD_DISHES:
      return { ...state, dishes: action.value };
    case ACTION_TYPE.CLEAR_RESTAURANT_DATA:
      return {};
    default:
      return { ...state };
  }
};
