import React from "react";

class PagPrincipal extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="./pagPrincipal.js">
            Bokla
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Pagina Principal
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Notas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Comentarios
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Cargar Libros
                </a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Buscar
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default PagPrincipal;
