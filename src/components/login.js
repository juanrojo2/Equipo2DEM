import React from "react";

export default class LogIn extends React.Component {
  render() {
    return (
      <div>
        <div className="modal-dialog text-center">
          <div className="col-sm-8 main-section">
            <div className="modal-content">
              <div className="col-12 user-img">
                <img
                  src="static/img/user.png"
                  th:src="@{/img/user.png}"
                  alt="Name"
                />
              </div>
              <form className="col-12" th:action="@{/login}" method="get">
                <div className="form-group" id="user-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Nombre de usuario"
                    name="username"
                  />
                </div>
                <div className="form-group" id="contrasena-group">
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Contrasena"
                    name="password"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  <i className="fas fa-sign-in-alt"></i> Ingresar
                </button>
              </form>
              <div className="col-12 forgot">
                <a href="#">Recordar contrasena?</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
