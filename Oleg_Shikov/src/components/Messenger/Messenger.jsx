import React, { Component } from 'react';
import { MessageList } from "../MessageList/MessageList";
import { MessengerForm } from "../MessengerForm";
import { ChatList } from '../ChatList/ChatList';
import("./Messenger.scss");

export class Messenger extends Component {
    /* state = {
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
        },
        //messages: [
         { name: "Oleg", content: "Привет!" },
         { name: "Ivan", content: "как дела?" },
         { name: "Oleg", content: "Good" },
         { name: "", content: "Good" },
        //]
    }*/

    timersOfBot = []

    sendNewMessage = (message) => {
        const { id } = this.props.match.params;

        this.timersOfBot.forEach(timer => clearTimeout(timer));

        this.setState((prevState) => {
            const chats = prevState.chats;
            chats[id].messages = chats[id].messages.concat([message]);
            return { chats }
        })
    }
    componentDidUpdate() {
       // const { id } = this.props.match.params;
        //const name = this.state.chats[id].messages[this.state.chats[id].messages.length - 1].name;

        //if (name != "Bot") {
           // this.timersOfBot.push(setTimeout(() => this.sendNewMessage({ name: "Bot", content: `Привет ${name}, я робот в чате ${id}` }), 1000))
        //}
    }

    render() {

        const { messages, id, chats } = this.props;
        
        //const messagesList = this.state.messages.map(item => <Message name={item.name} content={item.content} key={item.id} />);
        return (
            <div className="messenger-container">
                <ChatList chats={chats} addChat={this.props.addChat}></ChatList>
                <div className="current-chat">
                    {messages ? <MessageList messages={messages} /> : "Переписка не найдена"}
                    {messages && <MessengerForm onSendMessage={this.props.onSendMessage}></MessengerForm>}
                </div>
            </div>

        )//
    }
}