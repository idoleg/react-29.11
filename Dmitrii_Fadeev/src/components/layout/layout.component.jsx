import React from 'react';
import {Header} from "../header/header.component";
import './layout.style.css';
import {ChatList} from "../chatlist/chatlist.component";
import {Chat} from "../chat/chat.component";

export class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chats: {
                1: {
                    name: "1",
                    messages: []
                },
                2: {
                    name: "2",
                    messages: []
                },
                3: {
                    name: "3",
                    messages: []
                }
            }
        };
    }

    insertNewMessage = (chatId, name, content) => {
        let chats = this.state.chats;
        let id = 0;
        if (this.state.chats[chatId].messages.length > 0) {
            id = this.state.chats[chatId].messages[this.state.chats[chatId].messages.length - 1].id + 1;
        }
        chats[chatId].messages.push({id: id, name: name, content: content});
        this.setState({chats: chats});
    };

    sendNewMessage = (chatId, message) => {
        this.setState((prevState) => {
            if (prevState.chats[chatId].messages.length === 0) {
                message.id = 0;
            } else {
                message.id = prevState.chats[chatId].messages[prevState.chats[chatId].messages.length - 1].id + 1;
            }
            let chats = prevState.chats;
            chats[chatId].messages.push(message);
            return {
                chats: chats
            }
        })
    };

    createNewChat = () => {
        this.setState( (prevState) => {
            let chats = prevState.chats;
            const size = Object.keys(chats).length;

            chats[size + 1] = {
                name: size + 1,
                messages: []
            };
            return {
                chats: chats
            }
        })
    };

    render() {
        const {chats} = this.state;

        let {chatId} = this.props.match.params;
        if (chatId === undefined) {
            chatId = 1;
        }
        return (
            <div className="layout">
                <Header  />
                <div className="chat-wrapper">
                    <ChatList chats={chats} createNewChat={this.createNewChat} />
                    <Chat insertNewMessage={this.insertNewMessage} sendNewMessage={this.sendNewMessage} chat={chats[chatId]} chatId={chatId}/>
                </div>
            </div>
        )
    }
}