import MessageList from "./MessageList";
import messages from "./messages";
import SendButton from "./SendButton";
import React from "react";

const Messenger = () =>
    <div className="messenger">
        <MessageList messages={messages}/>
        <SendButton/>
    </div>;

export default Messenger;
