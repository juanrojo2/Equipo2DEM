import React from "react";
import Navbar from "../components/Nav/navBar";
import "../styles/styles.css";

class PagNotas extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center title mt-5">Notas</h1>
              <br />
              <h3 className="text-center mt-5">
                ¡Esta un poco vacio aqui! Toma notas de tus libros favoritos y
                apareceran aqui.
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PagNotas;
