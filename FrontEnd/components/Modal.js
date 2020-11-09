import React, { Component } from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class modal extends Component {
  state = {
    abierto: false
  };

  abrirModal = () => {
    this.setState({ abierto: !this.state.abierto });
  };

  render() {
    const modalStyles = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,50%)"
    };
    return (
      <div>
        <Modal isOpen={this.state.abierto} style={modalStyles}>
          <ModalHeader>Error</ModalHeader>
          <ModalBody>Fallo al iniciar sesion</ModalBody>
          <ModalFooter>
            <button onClick={this.abrirModal}>Aceptar</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
