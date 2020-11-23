import React from "react";
import Navbar from "../components/Nav/navBar";
import "../styles/styles.css";
import styled from "styled-components";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

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
  state = {
    abierto: false
  };
  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };
  render() {
    return (
      <>
        <div>
          <Navbar />
          <div className="container">
            <div className="row">
              <div className="col">
                <H1 className="text-center title mt-5">Comentarios</H1>
                <br />
                <div className="card">
                  <div className="card-body text-center div-card">
                    lorem ipsum dolorem lorem ipsum dolorem lorem ipsum dolorem
                    lorem ipsum dolorem
                    <hr />
                    <div className="div-btn">
                      <button
                        type="button"
                        className="btn btn-dark btn-block"
                        onClick={this.abrirModal}
                      >
                        Ver Comentario
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Modal isOpen={this.state.abierto}>
            <ModalBody>
              <form>
                <div className="form-group">
                  <h3>Comentario</h3>
                  <p>
                    lorem ipsum dolorem lorem ipsum dolorem lorem ipsum dolorem
                    lorem ipsum dolorem
                  </p>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-block"
                  onClick={this.abrirModal}
                >
                  Editar Comentario
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-block"
                  onClick={this.abrirModal}
                >
                  Eliminar Comentario
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark btn-block"
                  onClick={this.abrirModal}
                >
                  Cerrar
                </button>
              </form>
            </ModalBody>
          </Modal>
        </div>
      </>
    );
  }
}

export default PagComentarios;
