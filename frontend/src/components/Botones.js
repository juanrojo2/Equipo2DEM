import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-primary mt-4 p-3 btn-block">
          {this.props.texto}
        </button>
      </div>
    );
  }
}
