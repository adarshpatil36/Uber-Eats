import { ACTION_TYPE } from "../actions/ActionTypes";

const INITIAL_STATE = {
  loginUser: "Jarvis",
  activeTab: 0,
};
const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGIN:
      return state;
    case ACTION_TYPE.SET_ACTIVE_TAB:
      return { ...state, activeTab: action.value };

    default:
      return state;
  }
};

export default LoginReducer;
