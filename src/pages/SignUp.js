import React, { Component } from "react";
import "../styles/styles.css";
import { Link } from "react-router-dom";
import axios from "axios";
import md5 from "md5";

const baseUrl = "http://localhost:3001/usuarios";

var idUser = 4;

class SignUp extends Component {
  state={
    form:{
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = async (e) => {
    await this.setState({
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
    console.log(this.state.form);
  }

  registrarse = async () => {
    await axios.post(baseUrl, {
      id: idUser,
      name: this.state.form.name,
      email: this.state.form.email,
      password: md5(this.state.form.password)
    })
    .then(response => {
      console.log(response.data);
       alert("Registro correcto, ahora puedes iniciar sesión");
       window.location.href= "./Login"
    })
    .catch(error => {
      console.log(error);
      alert("Registro incorrecto");
    })
    idUser = idUser + 1;
  }
  render(){
    return(
      <div className="modal-dialog text-center">
        <div className="col-sm-8 main-section">
          <div className="modal-content">
            <h1>Registrarse</h1>
            <br />
            <form className="col-12">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  id="InputName"
                  name="name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="InputEmail"
                  placeholder="Correo Electronico"
                  aria-describedby="emailHelp"
                  name="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="InputPassword"
                  placeholder="Contraseña"
                  name="password"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="InputPasswordCon"
                  placeholder="Confirmar Contraseña"
                  name="confirmPassword"
                  onChange={this.handleChange}
                />
              </div>
              <button type="button" class="btn btn-dark" onClick={() => this.registrarse()}>Registrarse</button>
              <Link to="/Login">
                 <p className="linkSesion">Iniciar Sesión en cambio</p>
              </Link>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
