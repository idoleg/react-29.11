import React, {Component} from "react";
import PropTypes from "prop-types";
import {Header} from "../Header/Header"
import {ChatList} from "../ChatList/ChatList"
import {ChatForm} from "../ChatForm/ChatForm"
import {MessageField} from "../MessageField/MessageField"
import("./Layout.css");

export class Layout extends Component {
    static propTypes = {
        chatId: PropTypes.number,
    };
 
    static defaultProps = {
        chatId: 1,
    };

    chatId = this.props.chatId;

    state = {
        chats: {
            1: {
                name: "First chat",
                messages: [
                    { name: "Robot", content: "Привет путник, приветствую тебя в нашем чате!" },
                ],
            },
            2: {
                name: "Second chat",
                messages: [
                    { name: "Robot", content: "Привет путник, приветствую тебя в нашем чате!" },
                ],
            },
        }
    }

    size = function(obj) {
        var size = 0, key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) size++;
        }
        return size;
    };

    sendMessage = (message) => {
        this.setState((prevState) => {
            const chats = prevState.chats;
            chats[this.chatId].messages = chats[this.chatId].messages.concat([{
                id: chats[this.chatId].messages.length,
                name: message.name,
                content: message.message
            }]);
            return { chats }
        })
    }

    createChat = (chat) => {
        this.setState((prevState) => {
            const chats = prevState.chats;
            chats[this.size(chats)+1] = chat;
            return { chats }
        })
    }

    render() {
        const { chats } = this.state;
        if (this.props.match.params.chatId !== undefined) {
            this.chatId = this.props.match.params.chatId;
        }
        const { messages } = chats[this.chatId];
        return (
            <div className="layout">
                <div className="header">
                    <Header chatId={ this.chatId } />
                </div>
                <div className="messenger-content">
                    <div className="chat-list">
                        <ChatList chats={chats}/>
                        <ChatForm onCreateChat={this.createChat} />
                    </div>
                    <div className="messages-list">
                        <MessageField onSendMessage={this.sendMessage} messages={messages} />
                    </div>
                </div>
            </div>
        );
    }
}