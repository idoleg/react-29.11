import React, { Component } from "react";
import { Message } from "./Message";
import { Comment } from "./Comment";

export class MessageFild extends Component {
  state = {
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
      const last = this.state.messages[this.state.messages.length - 1].name;
      if (last != "Robot") {
          setTimeout(() => {
              this.setState(prevState => {
                  return {
                      messages: prevState.messages.concat([
                          {
                              name: "Robot",
                              content: "Hello, human, " + last + "."
                          }
                      ])
                  };
              });
          }, 1000);
      }
  }
  commentHandle = (name, text) => {
      this.setState(prevState => {
          return {
              messages: prevState.messages.concat([
                  {
                      name: name,
                      content: text
                  }
              ])
          };
      });
  };
  render() {
      const messageElements = this.state.messages.map((item, index) => (
          <Message name={item.name} content={item.content} key={index} />
      ));
      return (
          <div>
              {messageElements}
              <Comment onAddComment={this.commentHandle} />
          </div>
      );
  }
}
