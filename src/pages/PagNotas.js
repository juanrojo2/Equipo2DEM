import React from "react";
import Navbar from "../components/Nav/navBar";
import "../styles/styles.css";

import { Modal, ModalHeader, ModalBody } from "reactstrap";

class PagNotas extends React.Component {
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
                <h1 className="text-center title mt-5">Notas</h1>
                <br />
                <div className="card">
                  <div className="card-body text-center div-card">
                    This is some text within a card body.
                    <hr />
                    <div className="div-btn">
                      <button
                        type="button"
                        className="btn btn-dark btn-block"
                        onClick={this.abrirModal}
                      >
                        Nota
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
            <ModalHeader>Crear Comentario</ModalHeader>
            <ModalBody>
              <form>
                <div className="form-group">
                  <label for="comment">Comentario</label>
                  <input type="text" className="form-control" id="comment" />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-block"
                  onClick={this.abrirModal}
                >
                  Añadir comentario
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-block"
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

export default PagNotas;
