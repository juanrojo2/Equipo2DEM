import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import Button from "../components/Botones";

class signUp extends React.Component {
  render() {
    return (
      <div class="modal-dialog text-center">
        <div class="col-sm-8 main-section">
          <div class="modal-content">
            <h1>Registrarse</h1>
            <br />
            <form class="col-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  id="InputName"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  placeholder="Correo Electronico"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="InputPassword"
                  placeholder="Contraseña"
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  id="InputPasswordCon"
                  placeholder="Confirmar Contraseña"
                />
              </div>
              <Link to="/Login">
                <Button class="button" texto={"Registrarse"} />
              </Link>
              <Link to="/Login">
                <p class="linkSesion">Iniciar Sesión en cambio</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default signUp;
