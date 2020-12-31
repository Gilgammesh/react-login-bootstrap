import types from "../configs/types";

const initialState = {
  usuario: { isLogged: false },
  token: "",
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.login:
      return {
        usuario: { isLogged: true, ...payload.usuario },
        token: payload.token,
      };
    case types.logout:
      return {
        usuario: { isLogged: false },
        token: "",
      };
    default:
      return state;
  }
};

export default authReducer;
