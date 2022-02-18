import { LOGOUT, LOGIN, ERROR, USERDETAIL } from "../actions/log";

export const initialState = {
  logged: false,
  email: "",
  id: "",
  firstName: "",
  lastName: "",
  token: "",
  error: false,
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logged: true,
        error: false,
        email: action.payload.email,
        token: action.payload.token,
      };
    case LOGOUT:
      return {
        initialState,
      };
    case ERROR:
      return {
        ...state,
        error: true,
      };

    case USERDETAIL:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    default:
      return state;
  }
};

export default user;
