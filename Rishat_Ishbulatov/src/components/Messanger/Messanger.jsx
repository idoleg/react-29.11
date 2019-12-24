import React, { Component } from "react";
import { Header } from "../Header/Header";
import { ChatList } from "../ChatList/ChatList";
import { messageType } from "../Message/Message";
import { MessageList } from "../MessageList/MessageList";
import PropTypes from "prop-types";
import("./Messenger.sass");

export class Messenger extends Component {
    botTimers = [];
    lastName = "";
    static propTypes = {
        addChat: PropTypes.func,
        profile: PropTypes.object,
        sendMessage: PropTypes.func,
        chatID: PropTypes.string,
        chats: PropTypes.object,
        messages: PropTypes.arrayOf(PropTypes.shape(messageType))
    };
    onAddMessage = message => {
        this.botTimers.forEach(timer => clearTimeout(timer));
        this.botTimers = [];
        this.lastName = message.name;
        let { chatID } = this.props;
        if (chatID !== message.chatID) {
            return;
        }
        this.props.sendMessage(message);
    };
    componentDidUpdate() {
        if (this.lastName === "" || this.lastName === "Robot") {
            return;
        }
        let { chatID } = this.props;
        this.botTimers.push(
            setTimeout(
                () =>
                    this.onAddMessage({
                        chatID: chatID,
                        name: "Robot",
                        content: `Hello, human, ${this.lastName}. I'm a robot from chat ${chatID}`
                    }),
                1000
            )
        );
    }

    render() {
        const { chatID, chats, messages, addChat, profile } = this.props;
        return (
            <div className="messenger">
                <Header id={chatID} profile={profile} />
                <ChatList chats={chats} onSubmit={addChat} />
                {chatID && (
                    <MessageList
                        chatID={chatID}
                        messages={messages}
                        onSubmit={this.onAddMessage}
                    />
                )}
            </div>
        );
    }
}
