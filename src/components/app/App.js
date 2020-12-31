import React, { useEffect, useReducer } from "react";
import AuthContext from "../../context/AuthContext";
import authReducer from "../../reducers/authReducer";
import AppRouter from "../../routers/AppRouter";
import "bootstrap/dist/css/bootstrap.min.css";

const init = () => {
  return {
    usuario: JSON.parse(localStorage.getItem("usuario")) || { isLogged: false },
    token: localStorage.getItem("token") || "",
  };
};

const App = () => {
  const [state, dispatch] = useReducer(authReducer, {}, init);

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(state.usuario));
    localStorage.setItem("token", state.token);
  }, [state]);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};

export default App;
