import React from "react";
import Navbar from "../components/Nav/navBar";
import "../styles/styles.css";

class PagComentarios extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center title mt-5">Comentarios</h1>
              <br />
              <h3 className="text-center mt-5">
                ¡Esta un poco vacio aqui! Agrega comentarios de tus libros favoritos y
                apareceran aqui.
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PagComentarios;
