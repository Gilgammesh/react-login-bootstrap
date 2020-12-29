import types from "../configs/types";

const initialState = {
  isLogged: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.login:
      return {
        isLogged: true,
        ...payload,
      };
    case types.logout:
      return {
        isLogged: false,
      };
    default:
      return state;
  }
};

export default authReducer;
