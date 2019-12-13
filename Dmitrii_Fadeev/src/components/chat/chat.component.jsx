import React from 'react';
import { MessageList } from '../message-list/message-list.component';
import { MessengerForm } from "../messenger-form/messenger-form.component";
import './chat.style.css'

export class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [

            ]
        };
    }

    insertNewMessage = (name, content) => {
        let messages = this.state.messages;
        console.log("length: " + messages.length);
        let id = 0;
        if (messages.length > 0) {
            id = messages[messages.length - 1].id + 1;
        }
        messages.push({id: id, name: name, content: content});
        this.setState({messages: messages});
    };

    componentDidUpdate() {
        let messages = this.state.messages;
        let name = messages[messages.length - 1].name;
        if (name === 'Bot') {
            return;
        }
        setTimeout(() => this.insertNewMessage('Bot', `Test passed ${name}`), 1000);
    }

    sendNewMessage = (message) => {
        this.setState((prevState) => {
            if (prevState.messages.length === 0) {
                message.id = 0;
            } else {
                message.id = prevState.messages[prevState.messages.length - 1].id + 1;
            }
            return {
                messages: prevState.messages.concat(message)
            }
        })
    }

    render() {
        return (
            <div className="chat">
                <MessageList messages={this.state.messages} />
                <MessengerForm onSendMessage={this.sendNewMessage}/>
            </div>
        );
    }
}