import React from "react";
import { Link } from "react-router-dom";
import "../styles/loginStyles.css";
import Button from "../components/Botones";

class Login extends React.Component {
  render() {
    return (
      <div className="container mt-5 p-3">
        <form>
          <div className="form-group">
            <label for="InputEmail" className="text-white texto-label">
              Correo Electronico
            </label>
            <input
              type="email"
              className="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-white text-center">
              No compartiremmos tu correo electronico con nadie.
            </small>
          </div>
          <div class="form-group">
            <label for="InputPassword" className="text-white texto-label">
              Contraseña
            </label>
            <input type="password" class="form-control" id="InputPassword" />
          </div>
          <Link to="/PagPrincipal">
            <Button texto={"Iniciar sesión"} />
          </Link>
          <p id="accountRecovery" className="form-text text-white">
            ¿Olvidaste tu contraseña?
          </p>
        </form>
      </div>
    );
  }
}

export default Login;
