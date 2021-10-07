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

    case ACTION_TYPE.INCREASE_QUANTITY: {
      const dishes = [...state.dishes];
      const selectedDish = dishes.find((item) => item.id === action.value.id);
      selectedDish["quantity"] =
        selectedDish["quantity"] === undefined
          ? 1
          : selectedDish["quantity"] + 1;
      return { ...state, dishes: dishes };
    }

    case ACTION_TYPE.DECREASE_QUANTITY: {
      const dishes = [...state.dishes];
      const selectedDish = dishes.find((item) => item.id === action.value.id);
      selectedDish["quantity"] =
        selectedDish["quantity"] === undefined || selectedDish["quantity"] === 0
          ? 0
          : selectedDish["quantity"] - 1;
      return { ...state, dishes: dishes };
    }
    case ACTION_TYPE.CLEAR_RESTAURANT_DATA:
      return {};
    default:
      return { ...state };
  }
};
