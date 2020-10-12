import React, { Component } from "react";

export default class Books extends Component {
  render() {
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={this.props.portada}
            className="card-img-top"
            alt="Portada libro"
          />
          <div className="card-body">
            <h5 className="card-title">{this.props.titulo}</h5>
            <p className="card-text">{this.props.autor}</p>
            <a href={this.props.ruta} className="btn btn-primary">
              Leer
            </a>
          </div>
        </div>
      </div>
    );
  }
}
