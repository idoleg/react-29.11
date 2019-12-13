import React, { Component } from "react";
import { Header } from "../Header/Header";
import { ChatList } from "../ChatList/ChatList";
import { Messenger } from "../Messanger/Messanger";
import("./Layout.css");

export class Layout extends Component {
    render() {
        return (
            <section className="layout">
                <Header />
                <ChatList />
                <Messenger />
            </section>
        );
    }
}
