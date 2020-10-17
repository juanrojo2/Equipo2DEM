import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default class NavComentarios extends React.Component {
  state = {
    abierto: false
  };

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };
  render() {
    return (
      <>
        <nav className="navbar sticky-top navbar-light bg-light">
          <button
            type="button"
            className="btn btn-outline-dark btn-block"
            onClick={this.abrirModal}
          >
            Crear un comentario o nota
          </button>
        </nav>
        <div>
          <Modal isOpen={this.state.abierto}>
            <ModalHeader>Crear nota o comentario</ModalHeader>
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
                <div className="form-group">
                  <label for="note">Nota</label>
                  <input type="text" className="form-control" id="note" />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-block"
                  onClick={this.abrirModal}
                >
                  Añadir nota
                </button>
              </form>
            </ModalBody>
          </Modal>
        </div>
      </>
    );
  }
}
