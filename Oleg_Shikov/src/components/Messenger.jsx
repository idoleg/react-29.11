import React, { Component } from 'react';
import { Message } from "./Message";
export class Messenger extends Component {
    state = {
        messages: [
            { id: 0, name: "Oleg", content: "Привет!" },
            { id: 1, name: "Ivan", content: "как дела?" },
            { id: 2, name: "Oleg", content: "Good" },
            { id: 3, name: "", content: "Good" },
        ]
    }

    handleNewMassage = () => {

        this.setState((prevState) => {
            return {
                messages: prevState.messages.concat([{
                    id: prevState.messages.length,
                    name: "Robot",
                    content: "Hello, how are you?"
                }])
            }
        })
    }

    render() {
        const messagesList = this.state.messages.map(item => <Message name={item.name} content={item.content} key={item.id} />);
        return (
            <div>
                {messagesList}
                <input></input>
                <textarea></textarea>
                <button onClick={this.handleNewMassage}>New message</button>
            </div>

        )
    }
}