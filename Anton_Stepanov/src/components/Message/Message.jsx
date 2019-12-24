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
            "message-person": name !== "Robot"
        });
        // const style = {alignSelf: name === 'Robot' ? 'flex-start' : 'flex-end'}
        return (
            <div className={msgClass}><b>{name}:</b> {content}</div>
        );
    }
}