import React from 'react';
import PropTypes from  'prop-types';
import classNames from 'classnames';
import "./message.style.css";

export const messageType = {
    name: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};

export class Message extends React.Component {
    constructor(props) {
        super(props);
    };

    static propTypes = messageType;

    render() {
        const {name, content} = this.props;
        const msgClass = classNames("message", {
            "message-person": name !== 'Bot'
        })
        return (
            <div className={msgClass}><b>{name || "Anonim"}</b>: {content}</div>
        );
    }
}