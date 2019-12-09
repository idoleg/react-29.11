import React, { Component } from "react";
import PropTypes from "prop-types";

export class Comment extends Component {
  state = {
      name: "",
      text: ""
  };
  static propTypes = {
      onAddComment: PropTypes.func.isRequired
  };
  nameChangeHandle = event => {
      this.setState({ name: event.target.value });
  };

  textChangeHandle = event => {
      this.setState({ text: event.target.value });
  };
  submitHandle = event => {
      this.props.onAddComment(this.state.name, this.state.text);
      event.preventDefault();
  };
  render() {
      return (
          <form onSubmit={this.submitHandle} className="comment-form">
              <h3>Добавить сообщение</h3>
              <input
                  value={this.state.name}
                  onChange={this.nameChangeHandle}
                  placeholder="Ваше имя"
                  required
              />
              <textarea
                  value={this.state.text}
                  onChange={this.textChangeHandle}
                  placeholder="Ваше сообщение"
                  required
              />
              <input type="submit" value="Отправить" />
          </form>
      );
  }
}
