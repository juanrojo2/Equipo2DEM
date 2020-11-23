import React from "react";
import Navbar from "../components/Nav/navBar";
import "../styles/styles.css";

<<<<<<< Codesandbox
import { Modal, ModalBody } from "reactstrap";
=======
import { Modal, ModalHeader, ModalBody } from "reactstrap";
>>>>>>> GitHub

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
                    lorem ipsum dolorem lorem ipsum dolorem lorem ipsum dolorem
                    lorem ipsum dolorem
                    <hr />
                    <div className="div-btn">
                      <button
                        type="button"
                        className="btn btn-dark btn-block"
                        onClick={this.abrirModal}
                      >
                        Ver Nota
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
                  <h3>Nota</h3>
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
                  Editar nota
                </button>
                <button
                  type="button"
                  className="btn btn-outline-danger btn-block"
                  onClick={this.abrirModal}
                >
                  Eliminar nota
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

export default PagNotas;
