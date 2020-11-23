import React from "react";
import Navbar from "../components/Nav/navBar";
import "../styles/styles.css";
import Books from "../components/Books";

const PagPrincipal = () => {
  return (
    <div className="libros">
      <Navbar />
      <div className="container mt-5">
        <Books
          portada="https://i.ibb.co/TbSv99x/portada1.png"
          titulo="Alicia en el país de las maravillas"
          autor="Carrol Lewis"
          ruta="/Alicia"
        />
        <Books
          portada="https://i.ibb.co/4gzbNtT/portada2.png"
          titulo="Don Quijote de la Mancha"
          autor="Miguel de Cervantes"
        />
      </div>
    </div>
  );
};

export default PagPrincipal;
