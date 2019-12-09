import React from 'react';
import { MessageList } from '../message-list/message-list.component.jsx'

export class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {id: 0, name: 'Dima', content: 'hello, geekbrains!'},
                {id: 1, name: 'Eduardo', content: 'hola, geekbrains!'},
                {id: 2, name: 'Ion', content: 'buna, geekbrains!'},
                {id: 3, name: 'Anton', content: 'привет, geekbrains!'},
            ]
        }
    }

    componentDidUpdate() {
        let messages = this.state.messages;
        let name = messages[messages.length - 1].name;
        if (name === `Bot`) {
            return
        }
        let id = messages[messages.length - 1].id + 1;
        messages.push({id: id, name: `Bot`, content: `Test passed, ${name}`});
        this.setState({messages: messages});
    }

    render() {
        return (
            <div className="chat">
                <MessageList messages={this.state.messages} />
                <button onClick={() => {
                    let messages = this.state.messages;
                    let id = messages[messages.length - 1].id + 1;
                    messages.push({id: id, name: 'Unknown', content: 'Testing...'});
                    this.setState({messages: messages});
                }}> Message! </button>
            </div>
        )
    }
}