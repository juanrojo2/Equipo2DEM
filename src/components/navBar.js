import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/PagPrincipal">
          Bokla
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="/PagPrincipal">
                Libros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/PagNotas">
                Notas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/PagComentarios">
                Comentarios
              </a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Buscar
            </button>
          </form>
        </div>
      </nav>
    );
  }
}
