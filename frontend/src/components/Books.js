import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Books extends Component {
  render() {
    return (
      <div className="container mb-3">
        <div className="row">
          <div className="col-sm-12 col-md-6 mt-4">
            <div className="card" style={{ width: "200px" }}>
              <img
                src={this.props.portada}
                className="card-img-top"
                alt="Portada libro"
                width="150px"
              />
              <div className="card-body">
                <h5 className="card-title">{this.props.titulo}</h5>
                <p className="card-text">{this.props.autor}</p>
                <Link to={this.props.ruta}>
                  <a
                    href={this.props.ruta}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Leer
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
