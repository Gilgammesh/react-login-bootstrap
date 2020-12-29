import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import ModulosView from "../views/ModulosView";
import PerfilView from "../views/PerfilView";
import RegistrarView from "../views/RegistrarView";

const IntranetRoutes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={PerfilView} />
        <Route exact path="/perfil" component={PerfilView} />
        <Route exact path="/registrar" component={RegistrarView} />
        <Route exact path="/modulos" component={ModulosView} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default IntranetRoutes;
