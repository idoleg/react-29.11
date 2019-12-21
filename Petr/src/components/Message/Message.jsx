import React, {Component} from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import("./Message.css");

export const messageType = {
    name: PropTypes.string,
    content: PropTypes.string.isRequired
};

export class Message extends Component {
    static propTypes = messageType;

    render(){
        const {name, content} = this.props;
        const msgClass = classNames("message", {
            "message-person": name !== "Bot"
        });
        return (
            <div className={msgClass}><b>{name || "Anonim"}:</b> {content}</div>
        );
    }
}