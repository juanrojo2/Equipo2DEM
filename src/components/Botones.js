import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-dark mt-4 p-2 btn-block">
          {this.props.texto}
        </button>
      </div>
    );
  }
}
