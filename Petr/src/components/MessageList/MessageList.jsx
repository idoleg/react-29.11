import React, { Component } from "react";
import PropTypes from "prop-types";
import { Message, messageType } from "../Message/Message";
import("./MessageList.css");

export class MessageList extends Component {
    static propTypes = {
        messages: PropTypes.arrayOf(
            PropTypes.shape(messageType)
        )
    }

    render() {
        return (
            <div className="message-list">
                {this.props.messages.map((item, index) =>
                    <Message {...item} key={index} />)}
            </div>
        );
    }
}