import React from "react";
import ReactDOM from "react-dom";

const messages = [
    {id: 0, name: "Oleg", content: "Привет!"},
    {id: 1, name: "Ivan", content: "как дела?"},
    {id: 3, name: "Oleg", content: "Good"},
    {id: 4, name: "", content: "Good"},
]

const Message = (props) => <div><b>{props.name}:</b> {props.content}</div>;
const MessageList = function(props) {
    return props.messages.map(
        item => <Message name={item.name} content={item.content} key={item.id}/>);
}

class MessageBoard extends React.Component {

    handleSend(name, message) {
        messages.push({
            id: messages.length + 1,
            name: name,
            content: message,
        })
        this.setState({});
    }

    render() {
        return (
          <div className="messenger">
            <div className="messenger-board">
              <MessageList messages={messages} />
            </div>
            <div className="send-message">
                <button className="submit-message" onClick={() => this.handleSend('Fix Name', 'Fixed message')}>
                    Отправить сообщение
                </button>
            </div>
          </div>
        );
    }
}

ReactDOM.render(<MessageBoard />, document.getElementById("root"))