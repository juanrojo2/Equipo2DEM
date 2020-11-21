import React from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import Button from "../components/Botones";

const SignUp = () => {
  return(
    <div className="modal-dialog text-center">
      <div className="col-sm-8 main-section">
        <div className="modal-content">
          <h1>Registrarse</h1>
          <br />
          <form className="col-12">
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
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="InputPassword"
                placeholder="Contraseña"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                id="InputPasswordCon"
                placeholder="Confirmar Contraseña"
              />
            </div>
            <Link to="/Login">
              <Button className="button" texto={"Registrarse"} />
            </Link>
            <Link to="/Login">
               <p className="linkSesion">Iniciar Sesión en cambio</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
