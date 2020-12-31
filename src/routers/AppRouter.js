import React, { useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LoginView from "../views/LoginView";
import NotMatchView from "../views/NotMatchView";
import IntranetRoutes from "./IntranetRoutes";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => {
  const { state } = useContext(AuthContext);
  const { isLogged } = state.usuario;

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute
            path="/login"
            isLogged={isLogged}
            component={LoginView}
          />
          <PrivateRoute
            path="/"
            isLogged={isLogged}
            component={IntranetRoutes}
          />
          <Route path="*" component={NotMatchView} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
