import React, { Component } from 'react';
import { MessagesBoard } from "../MessagesBoard/MessagesBoard";
import { SendBox } from "../SendBox/SendBox";
import("./MessageField.css");

export class MessageField extends Component {
    sendMessage = (message) => {
        this.props.onSendMessage(message);
    }

    componentDidUpdate() {
        if (this.props.messages.length > 0) {
            let lastMessage = this.props.messages[this.props.messages.length-1];
            if (lastMessage.name != 'Robot') {
                setTimeout(() => {
                    this.sendMessage({name: "Robot", message: "Hello, " + lastMessage.name + ", how are you?"});
                }, 1000);
            }
        }
    }

    render() {
        return (
            <div className="messenger">
                <MessagesBoard messagesList={this.props.messages} />
                <SendBox
                    onSendMessage={this.sendMessage}
                />
            </div>
        )
    }
}