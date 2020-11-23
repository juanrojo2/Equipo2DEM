import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import sha1 from "sha1";
import "../styles/styles.css";
import Button from "../components/Botones";
import swal from "sweetalert2";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    Axios.post("https://bokla-backend.herokuapp.com/Login", {
      userEmail: userEmail,
      password: sha1(password)
    }).then((response) => {
      console.log(response.data);
      if (response.data.message === "Correo y/o contraseña erroneos") {
        swal.fire({
          title: "Correo y/o contraseña incorrectos",
          text: "Por favor intenta otra vez",
          icon: "error",
          confirmButtonText: "¡Entendido!",
          confirmButtonColor: "#3282f9"
        });
      } else {
        console.log("Inicio de sesión correcto");
        window.location.href = "/PagPrincipal";
      }
    });
  };
  return (
    <div className="modal-dialog text-center">
      <div className="main-section">
        <div className="modal-content">
          <h1>Iniciar sesión</h1>
          <form className="col-12">
            <div className="form-group">
              <label for="InputEmail" className="texto-label"></label>
              <input
                type="email"
                className="form-control"
                id="InputEmail"
                placeholder="Correo Electronico"
                aria-describedby="emailHelp"
                required="true"
                onChange={(e) => {
                  setUserEmail(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label for="InputPassword" className="texto-label"></label>
              <input
                type="password"
                className="form-control"
                placeholder="Contraseña"
                id="InputPassword"
                required="true"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <Button
              className="button"
              texto={"Iniciar sesión"}
              onClick={login}
            />
            <Link to="/SignUp">
              <p className="linkSesion">Registrarse</p>
            </Link>
            <p id="accountRecovery" className="form-text">
              ¿Olvidaste tu contraseña?
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
