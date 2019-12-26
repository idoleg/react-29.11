import React from 'react';
import {Header} from "../header/header.component";
import './layout.style.css';
import {ChatList} from "../chatlist/chatlist.component";
import {Chat} from "../chat/chat.component";

export class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {chats, chatId, notifyChat} = this.props;
        let {push} = this.props.push;
        if (chatId === undefined || chats[chatId] === undefined) {
            chatId = 1;
        }
        console.log("layout component", push);
        return (
            <div className="layout">
                <Header  />
                <div className="chat-wrapper">
                    {chats ? <ChatList chats={chats} notifyChat={notifyChat} createNewChat={this.props.onAddChat} push={push} /> : null}
                    {chats[chatId] && <Chat sendNewMessage={this.props.onSendMessage} chat={chats[chatId]} chatId={chatId}/> }
                </div>
            </div>
        )
    }
}