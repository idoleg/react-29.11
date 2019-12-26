import React, { useState } from "react";
import { Fab, TextField } from "@material-ui/core";
import { ChatBubble, DeleteForever } from "@material-ui/icons";
import PropTypes from "prop-types";
import("./ChatForm.sass");

export function ChatForm({ onSubmit, onDelete }) {
    const [chatName, setChatName] = useState("");
    return (
        <div className="chat-form">
            <TextField
                label="Add Chat"
                value={chatName}
                onChange={e => setChatName(e.target.value)}
            />
            <Fab
                onClick={() => {
                    onSubmit(chatName);
                    setChatName("");
                }}
                size="small"
                color="primary"
            >
                <ChatBubble fontSize="small" />
            </Fab>
            <Fab onClick={() => onDelete()} size="small" color="secondary">
                <DeleteForever fontSize="small" />
            </Fab>
        </div>
    );
}

ChatForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};
