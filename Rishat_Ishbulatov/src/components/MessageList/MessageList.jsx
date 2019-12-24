import React, { Component } from "react";
import { Message, messageType } from "../Message/Message";
import { MessageForm } from "../MessageForm/MessageForm";
import PropTypes from "prop-types";
import("./MessageList.sass");

export class MessageList extends Component {
    static propTypes = {
        chatID: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired,
        messages: PropTypes.arrayOf(PropTypes.shape(messageType))
    };
    render() {
        return (
            <div className="message-container">
                <div className="message-list">
                    {this.props.messages &&
                        this.props.messages.map((item, index) => (
                            <Message {...item} key={index} />
                        ))}
                </div>
                <MessageForm
                    chatID={this.props.chatID}
                    onSubmit={this.props.onSubmit}
                />
            </div>
        );
    }
}
