import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import("./Header.css");

export class Header extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <div>
                <h1>Messenger</h1>
                <span className="chat-name" style={ { fontSize: '20px' } }>Чат { this.props.chatId }</span>
                <Link className="profile-link" to="/profile/">Profile</Link>
            </div>
        )
    }
}