import React from "react";
import "../styles/loginStyles.css";
import Button from "../components/Botones";

class signUp extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="exampleInputText1">Nombre</label>
            <input type="text" class="form-control" id="exampleInputText1" />

            <label for="exampleInputEmail1">Correo Electronico</label>
            <input type="email" class="form-control" id="exampleInputEmail1" />
            <small id="emailHelp" class="form-text text-muted">
              No compartiremos tu correo con nadie
            </small>

            <label for="exampleInputPassword1">Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />

            <label for="exampleInputPassword1">Confirmar Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </form>
        <Button texto={"Registrarse"} />
      </div>
    );
  }
}

export default signUp;
