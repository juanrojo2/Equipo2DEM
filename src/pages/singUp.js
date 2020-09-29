import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import Button from "../components/Botones";

class signUp extends React.Component {
  render() {
    return (
      <div className="container mt-4 p-3">
        <h1>Registrarse</h1>
        <form>
          <div className="form-group">
            <label for="InputName" className="texto-label">
              Nombre
            </label>
            <input type="text" className="form-control" id="InputName" />
          </div>
          <div className="form-group">
            <label for="InputEmail" className="texto-label">
              Correo Electronico
            </label>
            <input
              type="email"
              className="form-control"
              id="InputEmail"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-texttext-center">
              No compartiremmos tu correo electronico con nadie.
            </small>
          </div>
          <div class="form-group">
            <label for="InputPassword" className="texto-label">
              Contraseña
            </label>
            <input type="password" class="form-control" id="InputPassword" />
          </div>
          <div class="form-group">
            <label for="InputPasswordCon" className="texto-label">
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
