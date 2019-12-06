import React from "react";
import ReactDOM from "react-dom";

const messages = [
    { id: 0, name: "Petr", content: "Привет!" },
    { id: 1, name: "Ivan", content: "как дела?" },
    { id: 3, name: "Petr", content: "Good" },
    { id: 4, name: "", content: "Good" },
]

const Message = (props) => <div><b>{props.name}:</b> {props.content}</div>;
const MessageList = function (props) {
    return props.messages.map(
        item => <Message name={item.name} content={item.content} key={item.id} />);
}

ReactDOM.render(<MessageList messages={messages} />, document.getElementById("root"))
