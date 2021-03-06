import React from "react";
import { Image } from "react-bootstrap";
import logo from "../assets/logo.png";
import Formulario from "../components/login/Formulario";

const LoginView = () => {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        height: "100vh",
        backgroundImage:
          "url(https://www.wallpapertip.com/wmimgs/3-34628_blue-and-white-background-hd.jpg)",
      }}
    >
      <div
        className="d-flex align-items-center"
        style={{
          width: "100%",
          maxWidth: "1200px",
          height: "100%",
          maxHeight: "700px",
          margin: "auto",
          border: "4px solid white",
          borderRadius: "6px",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              "url(https://www.petrogas.sm/wp-content/uploads/2019/04/parabolic-solar-concentrator-stirling.jpg)",
            backgroundSize: "cover",
          }}
        >
          <div
            style={{
              backgroundColor: "rgb(33,60,113,0.6)",
              width: "100%",
              height: "100%",
            }}
          ></div>
        </div>
        <div
          className="d-flex flex-column justify-content-center align-items-center"
          style={{
            width: "100%",
            maxWidth: "500px",
            height: "100%",
            backgroundColor: "#F5F7FE",
          }}
        >
          <div className="mb-4">
            <Image src={logo} width="300" />
          </div>
          <div className="mb-3 mt-3">
            <h2>Iniciar Sesión</h2>
          </div>
          <Formulario />
        </div>
      </div>
    </div>
  );
};

export default LoginView;
