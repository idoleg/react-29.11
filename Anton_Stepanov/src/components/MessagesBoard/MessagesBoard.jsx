import React, { Component } from "react";
import PropTypes from "prop-types";
import { Message, messageType } from "../Message/Message";
import("./MessagesBoard.css");

export class MessagesBoard extends Component {
    static propTypes = {
        messages: PropTypes.arrayOf(
            PropTypes.shape(messageType)
        )
    }

    render() {
        return (
            <div className="message-list">
                {this.props.chat.messages.map((index) =>
                    <Message {...this.props.messagesList[index]} key={index} />)}
            </div>
        )
    }
}