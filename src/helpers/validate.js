import Swal from "sweetalert2";

// Función para validar la data obtenida en la petición mediante FETCH
export const validateFetchData = ({ data, state }) => {
  if (!state) {
    Swal.fire({
      title: "Error!",
      text: "No se pudo conectar con los servicios",
      icon: "error",
      showCloseButton: true,
      showConfirmButton: false,
    });
    return false;
  }
  if (!data.status) {
    Swal.fire({
      title: "Error!",
      text: data.msg,
      icon: "error",
      showCloseButton: true,
      showConfirmButton: false,
    });
    return false;
  }
  return true;
};
