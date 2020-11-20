import React from "react";
import Navbar from "../components/Nav/navBar";
import "../styles/styles.css";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Lobster", cursive;
  font-size: 110px;
  color: black;
  @media (max-width: 554px) {
    font-size: 90px;
  }
  @media (max-width: 400px) {
    font-size: 3.6rem;
  }
`;

class PagComentarios extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col">
              <H1 className="text-center title mt-5">Comentarios</H1>
              <br />
              <h3 className="text-center mt-5">
                ¡Esta un poco vacio aqui! Agrega comentarios de tus libros
                favoritos y apareceran aqui.
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PagComentarios;