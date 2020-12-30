import React from "react";
import { Form, Button } from "react-bootstrap";
import validator from "validator";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { fetchData } from "../../helpers/fetch";

const Formulario = () => {
  const initFormValues = {
    username: "",
    password: "",
  };
  const [formValues, handleInputChange, resetForm] = useForm(initFormValues);
  const { username, password } = formValues;

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (validateForm()) {
      const result = await fetchData(false, "admin/login", "POST", formValues);
      resetForm(initFormValues);
      console.log(result);
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
        Submit
      </Button>
    </Form>
  );
};

export default Formulario;
