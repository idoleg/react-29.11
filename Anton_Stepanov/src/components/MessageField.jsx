import React, { Component } from 'react';
import { MessagesBoard } from "./MessagesBoard";
import { SendBox } from "./SendBox";

export class MessageField extends Component {
    state = {
        messages: [
            { id: 0, name: "Robot", content: "Привет путник, приветствую тебя в нашем чате!" },
        ],
    }

    sendMessage = (name, message) => {
        this.setState((prevState) => {
            return {
                messages: prevState.messages.concat([{
                    id: prevState.messages.length,
                    name: name,
                    content: message
                }]),
            }
        })
    }

    componentDidUpdate() {
        let lastMessage = this.state.messages[this.state.messages.length-1];
        if (lastMessage.name != 'Robot') {
            setTimeout(() => {
                this.sendMessage("Robot", "Hello, " + lastMessage.name + ", how are you?", false);
            }, 1000);
        }
    }

    render() {
        return (
            <div className="messenger">
                <MessagesBoard messagesList={this.state.messages} />
                <SendBox
                    sendMessage={this.sendMessage}
                />
            </div>
        )
    }
}