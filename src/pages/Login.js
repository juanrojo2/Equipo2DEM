import React, { useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import sha1 from "sha1";
import "../styles/styles.css";
import Button from "../components/Botones";

const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    Axios.post("https://kuepj-3001.sse.codesandbox.io/api/Login", {
      //Axios.post("http://localhost:3001/api/login", {
      userEmail: userEmail,
      password: sha1(password)
    }).then((response) => {
      console.log(response.data);
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
            <Link to="/PagPrincipal">
              <Button
                className="button"
                texto={"Iniciar sesión"}
                onClick={login}
              />
            </Link>
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
