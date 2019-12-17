import React, { Component } from 'react';
import { MessageList } from "./MessageList/MessageList";
import { MessengerForm } from "./MessengerForm";

export class Messenger extends Component {
    state = {
        chats: {
            1: {
                name: "It's chat #1", messages: [
                    { name: "Bot", content: "Привет из чата 1!" }
                ]
            },
            2: {
                name: "It's chat #2", messages: [
                    { name: "Bot", content: "Привет из чата 2!" }
                ]
            }
        }
    }

    timersOfBot = []

    sendNewMessage = (message) => {
        const { id } = this.props;
        this.timersOfBot.forEach(timer => clearTimeout(timer));

        this.setState((prevState) => {
            const chats = prevState.chats;
            chats[id].messages = chats[id].messages.concat([message]);
            return { chats }
        })
    }

    componentDidUpdate() {
        const { id } = this.props;
        if (!this.state.chats[id]) return;

        const name = this.state.chats[id].messages[this.state.chats[id].messages.length - 1].name;

        if (name != "Bot") {
            this.timersOfBot.push(setTimeout(() => this.sendNewMessage({ name: "Bot", content: `Привет ${name}, я робот в чате ${id}` }), 1000))
        }
    }

    render() {
        const { chats } = this.state;
        const { id } = this.props;

        return (
            <div>
                {chats[id] ? <MessageList messages={chats[id].messages} /> : "Переписка не найдена"}
                {chats[id] && <MessengerForm onSendMessage={this.sendNewMessage}></MessengerForm>}
            </div>

        )
    }
}