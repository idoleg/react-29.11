import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import PropTypes from "prop-types";
import classNames from "classnames";
import("./Chat.sass");

export function Chat({ id, onNavigate, title, onDelete, notice, chatID }) {
    const link = `/chats/${id}`;
    const selected = chatID == `${id}`;
    const chatClass = classNames("chat", {
        "chat-new": notice
    });
    return (
        <ListItem
            className={chatClass}
            button
            key={id}
            selected={selected}
            onClick={() => onNavigate(link)}
        >
            <ListItemText primary={title} />
            <DeleteOutlinedIcon
                label="Delete Chat"
                className="chat-delete"
                viewBox="0 0 24 24"
                onClick={() => onDelete(id)}
            />
        </ListItem>
    );
}

Chat.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    notice: PropTypes.bool,
    chatID: PropTypes.string,
    onNavigate: PropTypes.func,
    onDelete: PropTypes.func
};
