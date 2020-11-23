import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import Button from "../components/Botones";

const Login = () => {
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
              />
            </div>
            <Link to="/PagPrincipal">
              <Button className="button" texto={"Iniciar sesión"} />
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
