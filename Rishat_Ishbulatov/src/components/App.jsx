import React, { Component } from "react";
import { CommentForm } from "./CommentForm";
import { MessageFild } from "./MessageField";
import { FormButton } from "./FormButton";
import "../css/style.css";

export class App extends Component {
  state = {
      newComment: false,
      showForm: false,
      messages: [
          {
              name: "Vasia Pupkine",
              content: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
          },
          {
              name: "Doloremque",
              content:
          "In hac habitasse platea dictumst. Sed quis eros suscipit, tristique augue quis"
          },
          {
              name: "Voluptatum",
              content:
          "Rerum totam dicta error, doloremque officiis rem molestias asperiores cupiditate,"
          },
          {
              name: "Aspernatur",
              content: "Veritatis aliquam eaque provident voluptatum fuga?"
          },
          {
              name: "Velit",
              content:
          "Velit quia id omnis incidunt fugit dolores hic, aperiam perspiciatis quidem natus."
          }
      ]
  };
  componentDidUpdate() {
      if (this.state.newComment) {
          setTimeout(() => {
              this.setState({
                  messages: [
                      ...this.state.messages,
                      {
                          name: "Robot",
                          content:
                "Hello, human, " +
                this.state.messages[this.state.messages.length - 1].name +
                "."
                      }
                  ],
                  newComment: false
              });
          }, 1000);
      }
  }
  addCommentHandle = props => {
      this.setState(prevState => {
          return {
              messages: prevState.messages.concat([
                  {
                      name: props.name,
                      content: props.content
                  }
              ]),
              newComment: true
          };
      });
  };
  toggleForm = () => {
      this.setState({ showForm: !this.state.showForm });
  };
  render() {
      const commentFrom = this.state.showForm ? (
          <CommentForm
              onCancel={this.toggleForm}
              onSubmit={this.addCommentHandle}
          />
      ) : (
          <FormButton onClick={this.toggleForm} content={"Добавить сообщение"} />
      );
      return (
          <div>
              <MessageFild messages={this.state.messages} />
              {commentFrom}
          </div>
      );
  }
}
