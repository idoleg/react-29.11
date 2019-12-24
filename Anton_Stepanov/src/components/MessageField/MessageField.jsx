import React, { Component } from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import { MessagesBoard } from "../MessagesBoard/MessagesBoard";
import { SendBox } from "../SendBox/SendBox";
import("./MessageField.css");

export class MessageField extends Component {
    static propTypes = {
        messages: PropTypes.object.isRequired,
    };

    sendMessage = (message) => {
        this.props.onSendMessage(message);
    }

    componentDidUpdate() {
        if (Object.keys(this.props.messages).length > 0) {
            let lastMessage = this.props.messages[Object.keys(this.props.messages).length];
            if (lastMessage.name != 'Robot') {
                setTimeout(() => {
                    this.sendMessage({name: "Robot", content: "Hello, " + lastMessage.name + ", how are you?"});
                }, 1000);
            }
        }
    }

    render() {
        if (this.props.chats != undefined) {
            this.chat = this.props.chats[this.props.chatId];
        }
        return (
            <div className="messenger">
                {this.chat ? <MessagesBoard chat={this.chat} messagesList={this.props.messages} /> : ""}
                <SendBox
                    onSendMessage={this.sendMessage}
                />
            </div>
        )
    }
}