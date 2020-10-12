import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

export default class ventanamodal extends Component {
  state = {
    abierto: false
  };

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };
  render() {
    return (
      <div>
        <div className="principal"></div>
        <div className="secundario"></div>
        <Button onClick={this.abrirModal}>Mostrar modal</Button>

        <Modal isOpen={this.state.abierto}>
          <ModalHeader>Error</ModalHeader>

          <ModalBody>Fallo al iniciar sesion</ModalBody>

          <ModalFooter>
            <Button>Aceptar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
