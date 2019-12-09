import React, {Component} from "react";
import {MessageField} from "./MessageField";
import {Message} from "./Message";
import {MessageNew} from "./MessageNew";

export class Messenger extends Component {

    state = {
        messages: [
            {id: 0, name: "Ivan", content: "Привет!"},
        ]
    }

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            const lastName = this.state.messages[this.state.messages.length - 1].name;
            setTimeout(() =>
                this.setState(
                    {
                        messages: [...this.state.messages,
                            {
                                id: this.state.messages.length,
                                name: "Robot",
                                content:  lastName + ", не приставай ко мне, я робот!?"
                            }
                        ]
                    }), 1000
            )
            ;
        }
    }

    handleNewMassage = (newMessage) => {
        this.setState((prevState) => {
            return {
                messages: prevState.messages.concat([{
                    id: prevState.messages.length,
                    name: newMessage.name,
                    content: newMessage.content
                }])
            };
        });
    }

    handleNewMassageOld = () => {
        this.setState((prevState) => {
            return {
                messages: prevState.messages.concat([{
                    id: prevState.messages.length,
                    name: "Robot",
                    content: "Hello! How are you?"
                }])
            };
        });
    }

    render() {
        const {messages} = this.state;
        return (
            <div>
                <MessageField messageList={messages}/>
                <MessageNew onSaveMessage={this.handleNewMassage}/>

            </div>
        );
    }
}