import React, { Component } from 'react';
import { Message } from "./Message";

export class MessageField extends Component {
    constructor(props) {
        super(props);
        this.messageSender = React.createRef();
        this.messageTextarea = React.createRef();
    }

    state = {
        messages: [
            { id: 0, name: "Robot", content: "Привет путник, приветствую тебя в нашем чате!" },
        ]
    }

    handleKeyUp = (event) => {
        if (event.keyCode === 13) { //Enter code
            this.sendMessage(this.messageSender.current.value, this.messageTextarea.current.value, true);
            this.messageTextarea.current.value = '';
        }
    };

    handleClick = (event) => {
        this.sendMessage(this.messageSender.current.value, this.messageTextarea.current.value, true);
        this.messageTextarea.current.value = '';
    };

    sendMessage = (name, message, fromUser) => {
        this.setState((prevState) => {
            return {
                messages: prevState.messages.concat([{
                    id: prevState.messages.length,
                    name: name,
                    content: message
                }]),
                messageFromUser: fromUser
            }
        })
    }

    componentDidMount() {
        this.messageSender.current.focus();
    }

    componentDidUpdate() {
        if (this.state.messageFromUser) {
            setTimeout(() => {
                this.sendMessage("Robot", "Hello, " + this.state.messages[this.state.messages.length-1].name + ", how are you?", false);
            }, 1000);
        }
    }

    render() {
        const messagesList = this.state.messages.map(item => <Message name={item.name} content={item.content} key={item.id} />);
        return (
            <div className="messenger">
                <div className="messenger-board">
                    {messagesList}
                </div>
                <div className="sendBox">
                    <input ref={this.messageSender} className="nameInput" name="name" placeholder="Put your name"></input>
                    <textarea ref={this.messageTextarea} className="messageTextarea" name="message" onKeyUp={(event) => this.handleKeyUp(event)}></textarea>
                    <button className="submitBtn" onClick={(event)=>this.handleClick(event)}>Send</button>
                </div>
            </div>

        )
    }
}