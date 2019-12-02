import React from "react";
import ReactDOM from "react-dom";

const Message = props => (
  <div>
    <b>{props.name}</b>: {props.content}
  </div>
);

const MessageList = function(props) {
  return props.messages.map((item, index) => (
    <Message name={item.name} content={item.content} key={index} />
  ));
};

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.clickHandle = this.clickHandle.bind(this);
    this.messages = [
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
    ];
  }

  clickHandle() {
    this.messages.push({
      name: "Test",
      content: "Нормально"
    });
    this.setState({});
  }

  render() {
    return (
      <article>
        <h1>Blog</h1>
        <MessageList messages={this.messages} />
        <button onClick={this.clickHandle}>Отправить</button>
      </article>
    );
  }
}

ReactDOM.render(<Blog />, document.getElementById("root"));
