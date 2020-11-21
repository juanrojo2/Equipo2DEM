import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default class NavComentarios extends React.Component {
  state = {
    abierto1: false,
    abierto2: false
  };

  abrirModal1 = () => {
    this.setState({ abierto1: !this.state.abierto1 });
  };
  abrirModal2= () => {
    this.setState({ abierto2: !this.state.abierto2 });
  };
  render() {
    return (
      <>
        <nav className="navbar sticky-top navbar-light bg-light">
          <button
            type="button"
            className="btn btn-outline-dark btn-block"
            onClick={this.abrirModal1}
          >
            Nota
          </button>
          <button
            type="button"
            className="btn btn-outline-dark btn-block"
            onClick={this.abrirModal2}
          >
            Comentario
          </button>
        </nav>
        <div>
          <Modal isOpen={this.state.abierto1}>
            <ModalHeader>Crear Nota</ModalHeader>
            <ModalBody>
              <form>
                <div className="form-group">
                  <label for="note">Nota</label>
                  <input type="text" className="form-control" id="note" />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-block"
                  onClick={this.abrirModal1}
                >
                  Añadir nota
                </button>
              </form>
            </ModalBody>
          </Modal>
          <Modal isOpen={this.state.abierto2}>
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
                  onClick={this.abrirModal2}
                >
                  Añadir comentario
                </button>
              </form>
            </ModalBody>
          </Modal>
        </div>
      </>
    );
  }
}
