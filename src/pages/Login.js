import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import axios from "axios";
import md5 from "md5";
import Cookies from "universal-cookie";

const baseUrl = "http://localhost:3001/usuarios";
const cookies = new Cookies();

class Login extends Component{
  state={
    form:{
      email: '',
      password: ''
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

  iniciarSesion = async () => {
    await axios.get(baseUrl, {params: {email: this.state.form.email, password: md5(this.state.form.password)}})
    .then(response => {
      return response.data;
    })
    .then(response => {
      console.log(response.data);
      if(response.length > 0){
        var respuesta = response[0];
        cookies.set('id', respuesta.id, {path: '/'});
        cookies.set('email', respuesta.email, {path: '/'});
        alert("Bienvenido");
        window.location.href= "./PagPrincipal"
      } else {
        alert("El usuario y/o la contraseña no son correctos");
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  render(){
    return(
      <div className="modal-dialog text-center">
      <div className="main-section">
        <div className="modal-content">
          <h1>Iniciar sesión</h1>
          <form className="col-12">
            <div className="form-group">
              <label for="InputEmail" className="texto-label"></label>
              <input
                type="email"
                className="form-control"
                id="InputEmail"
                name="email"
                placeholder="Correo Electronico"
                aria-describedby="emailHelp"
                required="true"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label for="InputPassword" className="texto-label"></label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Contraseña"
                id="InputPassword"
                required="true"
                onChange={this.handleChange}
              />
            </div>
            
            <button type="button" class="btn btn-dark" onClick={() => this.iniciarSesion()}>Iniciar Sesion</button>
            
            <Link to="/SignUp">
              <p className="linkSesion">Registrarse</p>
            </Link>
            <p id="accountRecovery" className="form-text">
              ¿Olvidaste tu contraseña?
            </p>
          </form>
        </div>
      </div>
    </div>
    );
  }
}

export default Login;
