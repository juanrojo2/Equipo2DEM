import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import Button from "../components/Botones";

class Login extends React.Component {
  render() {
    return (
      <div class="modal-dialog text-center">
        <div class="main-section">
          <div class="modal-content">
            <h1>Iniciar sesión</h1>
            <form class="col-12">
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
              <div class="form-group">
                <label for="InputPassword" className="texto-label"></label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Contraseña"
                  id="InputPassword"
                  required="true"
                />
              </div>
              <Link to="/PagPrincipal">
                <Button class="button" texto={"Iniciar sesión"} />
              </Link>
              <p id="accountRecovery" className="form-text">
                ¿Olvidaste tu contraseña?
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
