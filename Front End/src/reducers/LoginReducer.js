import { ACTION_TYPE } from "../actions/ActionTypes";
import { CONSTANTS } from "../constants/constants";

const INITIAL_STATE = {
  activeTab: CONSTANTS.LOGIN_TAB,
};
const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGIN:
      return state;
    case ACTION_TYPE.SET_ACTIVE_TAB:
      return { ...state, activeTab: action.value };
    case ACTION_TYPE.SET_LOGIN_DATA:
      return { ...state, userData: action.value };
    default:
      return state;
  }
};

export default LoginReducer;
