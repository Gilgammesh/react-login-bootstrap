import React, { useContext, useEffect, useState } from "react";
import { Image, Card } from "react-bootstrap";
import avatar from "../assets/avatar.jpg";
import AuthContext from "../context/AuthContext";
import { fetchData } from "../helpers/fetch";

const PerfilView = () => {
  const { state } = useContext(AuthContext);
  const { nombres, apellidos, email, rol } = state.usuario;

  const [nombreRol, setNombreRol] = useState("");

  useEffect(() => {
    getRol(rol);
  }, [rol]);

  const getRol = async (id) => {
    const { data } = await fetchData(true, `admin/rol/${id}`);
    setNombreRol(data.rol.nombre);
  };

  return (
    <>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h3>Perfil de Usuario</h3>
      </div>
      <div className="row">
        <div className="col-md-3">
          <Image src={avatar} roundedCircle className="shadow" />
        </div>
        <div className="col-md-9">
          <Card>
            <Card.Header>
              <Card.Title>Información General</Card.Title>
            </Card.Header>
            <Card.Body>
              <Card.Subtitle>Nombres:</Card.Subtitle>
              <Card.Text>{nombres}</Card.Text>
              <Card.Subtitle>Apellidos:</Card.Subtitle>
              <Card.Text>{apellidos}</Card.Text>
              <Card.Subtitle>Correo</Card.Subtitle>
              <Card.Text>{email}</Card.Text>
              <Card.Subtitle>Rol</Card.Subtitle>
              <Card.Text>{nombreRol}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PerfilView;
