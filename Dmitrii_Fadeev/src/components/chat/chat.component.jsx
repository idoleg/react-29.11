import React from 'react';
import { MessageList } from '../message-list/message-list.component';
import { MessengerForm } from "../messenger-form/messenger-form.component";
import './chat.style.css'

export class Chat extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        const {chat} = this.props;
        if (chat.messages.length === 0) {
            return;
        }
        let name = chat.messages[chat.messages.length - 1].name;
        if (name === 'Bot') {
            return;
        }
        setTimeout(() => this.props.insertNewMessage(parseInt(chat.name),'Bot', `Test passed ${name} in chat ${chat.name}`), 2000);
    }

    render() {
        const {chat} = this.props;
        return (
            <div className='chat'>
                <div className='chat-header'>
                    <p>Current Chat: {chat.name}</p>
                </div>
                <MessageList messages={chat.messages} />
                <MessengerForm onSendMessage={this.props.sendNewMessage} chatId={this.props.chatId}/>
            </div>
        );
    }
}