import React from "react";
import Navbar from "../components/Nav/navBar";
import "../styles/styles.css";
import Books from "../components/Books";

class PagPrincipal extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container mt-5">
          <Books
            portada="../images/portada1.png"
            titulo="Alicia en el país de las maravillas"
            autor="Carrol Lewis"
            ruta="/"
          />
        </div>
      </div>
    );
  }
}

export default PagPrincipal;
