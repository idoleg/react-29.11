import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import("./Message.sass");

export const messageType = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isNew: PropTypes.bool.isRequired
};

export class Message extends Component {
    static propTypes = messageType;
    render() {
        const { name, content, isNew } = this.props;
        const msgClass = classNames("message", {
            "message-person": name !== "Robot",
            "message-new": isNew
        });
        return (
            <div className={msgClass}>
                <b>{name}</b>: {content}
            </div>
        );
    }
}
