import React from "react";
import Message from "./Message";
import messages from "./messages"

const MessageList = () => messages.map(item =>
    <Message
        key={item.id}
        name={item.name}
        content={item.content}
    />
);

export default MessageList;