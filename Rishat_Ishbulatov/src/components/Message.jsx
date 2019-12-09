import React, { Component } from "react";
import PropTypes from "prop-types";

export class Message extends Component {
  static propTypes = {
      name: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired
  };
  render() {
      return (
          <div>
              <b>{this.props.name}</b>: {this.props.content}
          </div>
      );
  }
}
