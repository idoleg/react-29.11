import React, { Component } from 'react';
import { MessageList } from "./MessageList/MessageList";
import { MessengerForm } from "./MessengerForm";

export class Messenger extends Component {
    state = {
        messages: [
           /* { name: "Oleg", content: "Привет!" },
            { name: "Ivan", content: "как дела?" },
            { name: "Oleg", content: "Good" },
            { name: "", content: "Good" },*/
        ],
        botTimeout: false
    }

    sendNewMessage = (message) => {

        this.setState((prevState) => {
            return {
                messages: prevState.messages.concat([message])
            }
        })
    }

    componentDidUpdate() {
        const name = this.state.messages[this.state.messages.length - 1].name;
        
        if(name != "Bot") {
            clearTimeout (this.state.botTimeout)
            this.state.botTimeout = setTimeout(() => this.sendNewMessage({name: "Bot", content: "Привет, я робот"}), 1000)
        }
    }

    render() {
        const { messages } = this.state;
        //const messagesList = this.state.messages.map(item => <Message name={item.name} content={item.content} key={item.id} />);
        return (
            <div>
                <MessageList messages={messages}></MessageList>
                <MessengerForm onSendMessage={this.sendNewMessage}></MessengerForm>
            </div>

        )
    }
}