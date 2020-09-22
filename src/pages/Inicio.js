import React from "react";
import "../styles/loginStyles.css";
import Button from "../components/Botones";

class Inicio extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid align-self-center">
          <div className="row">
            <div className="col p-5 m-5">
              <h1 className="tittle">Bokla</h1>
              <Button texto={"Iniciar sesión"} />
              <Button texto={"Registrarse"} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
