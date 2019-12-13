import React from 'react';
import {Header} from "../header/header.component";
import './layout.style.css';
import {ChatList} from "../chatlist/chatlist.component";
import {Chat} from "../chat/chat.component";


export class Layout extends React.Component {

    render() {
        return (
            <div className="layout">
                <Header  />
                <div className="chat-wrapper">
                    <ChatList />
                    <Chat />
                </div>
            </div>
        )
    }
}