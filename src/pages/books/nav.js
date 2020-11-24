import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import axios from "axios";

const baseUrlNotas = "http://localhost:3001/Notas";
const baseUrlComentarios = "http://localhost:3001/Comentarios";
var idNote = 2;
var idComent = 2;

export default class NavComentarios extends React.Component {

  state={
    abierto1: false,
    abierto2: false,
    formNota:{
      contenido_nota: ''
    },
    formComent:{
      contenido_comentario: ''
    }
  }

  //JSON-SERVER
  handleChangeNota = async (e) => {
    await this.setState({
      formNota:{
        ...this.state.formNota,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.formNota);
  }

  handleChangeComentario = async (e) => {
    await this.setState({
      formComent:{
        ...this.state.formComent,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.formComent);
  }

  nota = async () => {
    await axios.post(baseUrlNotas, {
      id: idNote,
      contenido_nota: this.state.formNota.contenido_nota,
      libro: "Alicia en el país de las maravillas"
    })
    .then(response => {
      console.log(response.data);
       alert("Nota guardada correctamente");
    })
    .catch(error => {
      console.log(error);
      alert("Nota no guardada correctamente");
    })
    idNote = idNote + 1;
  }

  comentario = async () => {
    await axios.post(baseUrlComentarios, {
      id: idComent,
      contenido_comentario: this.state.formNota.contenido_comentario,
      libro: "Alicia en el país de las maravillas"
    })
    .then(response => {
      console.log(response.data);
       alert("Comentario guardado correctamente");
    })
    .catch(error => {
      console.log(error);
      alert("Comentario no guardado correctamente");
    })
    idComent = idComent + 1;
  }

  //Modal

  abrirModal1 = () => {
    this.setState({ abierto1: !this.state.abierto1 });
  };
  abrirModal2 = () => {
    this.setState({ abierto2: !this.state.abierto2 });
  };
  render() {
    return (
      <>
        <nav className="navbar sticky-top navbar-light bg-light">
          <button
            type="button"
            className="btn btn-outline-dark btn-nota"
            onClick={this.abrirModal1}
          >
            Nota
          </button>
          <button
            type="button"
            className="btn btn-outline-dark btn-nota"
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
                  <input type="text" className="form-control" id="note" name="contenido_nota" onChange={this.handleChangeNota} />
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-block"
                  onChange={this.abrirModal1}
                  onClick={() => this.nota()}
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
                  <input type="text" className="form-control" id="comment" name="contenido_comentario" onChange={this.handleChangeComentario}/>
                </div>
                <button
                  type="button"
                  className="btn btn-outline-primary btn-block"
                  onChange={this.abrirModal2}
                  onClick={() => this.comentario()}
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
