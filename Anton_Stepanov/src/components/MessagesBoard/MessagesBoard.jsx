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
                {this.props.messagesList.map((item, index) =>
                    <Message {...item} key={index} />)}
            </div>
        )
    }
}