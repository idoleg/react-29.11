import React, {Component} from "react";
import {Header} from "../Header/Header"
import {ChatList} from "../ChatList/ChatList"
import {MessageField} from "../MessageField/MessageField"
import("./Layout.css");

export class Layout extends Component {
    render() {
        return (
            <div className="layout">
                <div className="header">
                    <Header />
                </div>
                <div className="messenger-content">
                    <div className="chat-list">
                        <ChatList />
                    </div>
                    <div className="messages-list">
                        <MessageField />
                    </div>
                </div>
            </div>
        );
    }
}