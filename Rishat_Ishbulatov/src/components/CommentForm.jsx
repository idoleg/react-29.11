import React, { Component } from "react";
import { FormButton } from "./FormButton";
import PropTypes from "prop-types";

export class CommentForm extends Component {
  state = {
      name: "",
      content: ""
  };
  static propTypes = {
      onCancel: PropTypes.func.isRequired,
      onSubmit: PropTypes.func.isRequired
  };
  submitHandle = () => {
      this.props.onSubmit(this.state);
      event.preventDefault();
  };
  changeHandle = event => {
      this.setState({
          [event.target.name]: event.target.value
      });
  };
  render() {
      return (
          <form onSubmit={this.submitHandle} className="comment-form">
              <h3>Добавить сообщение</h3>
              <input
                  name="name"
                  value={this.name}
                  onChange={this.changeHandle}
                  placeholder="Ваше имя"
                  required
              />
              <textarea
                  name="content"
                  value={this.content}
                  onChange={this.changeHandle}
                  placeholder="Ваше сообщение"
                  required
              />
              <input type="submit" value="Отправить" />
              <FormButton onClick={this.props.onCancel} content={"Отменить"} />
          </form>
      );
  }
}
