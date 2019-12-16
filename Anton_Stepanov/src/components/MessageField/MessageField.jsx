import React, { Component } from 'react';
import { MessagesBoard } from "../MessagesBoard/MessagesBoard";
import { SendBox } from "../SendBox/SendBox";
import("./MessageField.css");

export class MessageField extends Component {
    state = {
        messages: [
            { id: 0, name: "Robot", content: "Привет путник, приветствую тебя в нашем чате!" },
        ],
    }

    sendMessage = (message) => {
        this.setState((prevState) => {
            return {
                messages: prevState.messages.concat([{
                    id: prevState.messages.length,
                    name: message.name,
                    content: message.message
                }]),
            }
        })
    }

    componentDidUpdate() {
        let lastMessage = this.state.messages[this.state.messages.length-1];
        if (lastMessage.name != 'Robot') {
            setTimeout(() => {
                this.sendMessage({name: "Robot", message: "Hello, " + lastMessage.name + ", how are you?"});
            }, 1000);
        }
    }

    render() {
        return (
            <div className="messenger">
                <MessagesBoard messagesList={this.state.messages} />
                <SendBox
                    onSendMessage={this.sendMessage}
                />
            </div>
        )
    }
}