import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import Button from "../components/Botones";

const Inicio = () => {
  return(
    <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center title mt-5">Bokla</h1>
            <Link to="/Login">
              <Button texto={"Iniciar sesión"} />
            </Link>
            <Link to="/SignUp">
              <Button texto={"Registrarse"} />
            </Link>
          </div>
        </div>
      </div>
  );
}

export default Inicio;
