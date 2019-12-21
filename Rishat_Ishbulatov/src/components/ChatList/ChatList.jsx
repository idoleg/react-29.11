import React, { Component } from "react";
import { Link } from "react-router-dom";
import { List, ListItemText } from "@material-ui/core";
import { ChatForm } from "../ChatForm/ChatForm";
import PropTypes from "prop-types";
import("./ChatList.sass");

export class ChatList extends Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        onSubmit: PropTypes.func.isRequired
    };
    render() {
        const { chats } = this.props;
        const chatList = Object.entries(chats).map((item, index) => (
            <Link to={`/chats/${item[0]}`} key={index}>
                <ListItemText primary={item[1].title} />
            </Link>
        ));

        return (
            <div className="chat-container">
                <div className="chat-list">
                    <List>{chatList}</List>
                </div>
                <ChatForm onSubmit={this.props.onSubmit} />
            </div>
        );
    }
}
