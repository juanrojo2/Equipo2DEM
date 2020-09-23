import React from "react";
import "../styles/loginStyles.css";
import { Link } from "react-router-dom";
import Button from "../components/Botones";

class signUp extends React.Component {
  render() {
    return (
      <div className="container mt-5 p-3">
        <form>
          <div className="form-group">
            <label for="InputName" className="text-white texto-label">
              Nombre
            </label>
            <input type="text" className="form-control" id="InputName" />
          </div>
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
          <div class="form-group">
            <label for="InputPasswordCon" className="text-white texto-label">
              Confirmar Contraseña
            </label>
            <input type="password" class="form-control" id="InputPasswordCon" />
          </div>
          <Link to="/Login">
            <Button texto={"Registrarse"} />
          </Link>
          <Link to="/Login">
            <Button texto={"Inciar sesión"} />
          </Link>
        </form>
      </div>
    );
  }
}

export default signUp;
