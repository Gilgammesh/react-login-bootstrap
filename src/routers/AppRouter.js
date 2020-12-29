import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginView from "../views/LoginView";
import NotMatchView from "../views/NotMatchView";
import IntranetRoutes from "./IntranetRoutes";

const AppRouter = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login" component={LoginView} />
          <Route path="/" component={IntranetRoutes} />
          <Route path="*" component={NotMatchView} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
