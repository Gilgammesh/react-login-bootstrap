import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../components/header/Header";
import SidebarMenu from "../components/sidebar/SidebarMenu";
import ModulosView from "../views/ModulosView";
import PerfilView from "../views/PerfilView";
import RegistrarView from "../views/RegistrarView";

const IntranetRoutes = () => {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <SidebarMenu />
          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Switch>
              <Route exact path="/perfil" component={PerfilView} />
              <Route exact path="/registrar" component={RegistrarView} />
              <Route exact path="/modulos" component={ModulosView} />
              <Redirect to="/perfil" />
            </Switch>
          </main>
        </div>
      </div>
    </>
  );
};

export default IntranetRoutes;
