import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary p-3 m-3">
          {this.props.texto}
        </button>
      </div>
    );
  }
}
