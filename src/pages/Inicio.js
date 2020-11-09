import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import Button from "../components/Botones";

class Inicio extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center title mt-5">Bokla</h1>
            <Link to="/Login">
              <Button texto={"Iniciar sesión"} />
            </Link>
            <Link to="/singUp">
              <Button texto={"Registrarse"} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Inicio;
