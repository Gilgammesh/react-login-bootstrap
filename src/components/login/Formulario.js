import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { browserName, deviceType } from "react-device-detect";
import { GoSignIn } from "react-icons/go";
import validator from "validator";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { fetchData } from "../../helpers/fetch";
import { validateFetchData } from "../../helpers/validate";
import AuthContext from "../../context/AuthContext";
import types from "../../configs/types";

const Formulario = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);

  const initFormValues = {
    username: "",
    password: "",
    navegador: browserName,
    dispositivo: deviceType,
  };
  const [formValues, handleInputChange, resetForm] = useForm(initFormValues);
  const { username, password } = formValues;

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (validateForm()) {
      const result = await fetchData(false, "auth/login", "POST", formValues);
      if (validateFetchData(result)) {
        const { usuario, token } = result.data;
        dispatch({
          type: types.login,
          payload: {
            usuario,
            token,
          },
        });
        resetForm(initFormValues);
        history.replace("/");
      }
    }
  };

  const validateForm = () => {
    if (validator.isEmpty(username)) {
      Swal.fire({
        title: "Advertencia!",
        text: "El usuario es requerido",
        icon: "warning",
        showCloseButton: true,
        showConfirmButton: false,
      });
      return false;
    }
    if (!validator.isLength(username, { min: 8, max: 8 })) {
      Swal.fire({
        title: "Advertencia!",
        text: "El usuario debe tener 8 dígitos",
        icon: "warning",
        showCloseButton: true,
        showConfirmButton: false,
      });
      return false;
    }
    if (validator.isEmpty(password)) {
      Swal.fire({
        title: "Advertencia!",
        text: "La contraseña es requerida",
        icon: "warning",
        showCloseButton: true,
        showConfirmButton: false,
      });
      return false;
    }
    return true;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formGroupUser">
        <Form.Label>Usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su usuario"
          name="username"
          value={username}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingrese su contraseña"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        <GoSignIn /> Ingresar
      </Button>
    </Form>
  );
};

export default Formulario;
