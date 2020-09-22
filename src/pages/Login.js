import React from "react";
import "../styles/loginStyles.css";
import Button from "../components/Botones";

class Login extends React.Component {
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label for="exampleInputEmail1">Correo Electronico</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" class="form-text text-muted">
              No compartiremos tu correo con nadie
            </small>

            <label for="exampleInputPassword1">Contraseña</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
        </form>
        <Button texto={"Iniciar sesión"} />
      </div>
    );
  }
}

export default Login;
