import React, {Component} from "react";
import ("./Messenger.css");
import {MessageField} from "../MessageField/MessageField";
import {MessengerForm} from "../MessengerForm/MessengerForm";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {Header} from "../Header/Header";
import {ChatList} from "../ChatList/ChatList";


export class Messenger extends Component {

    state = {
        messages: [
            // {name: "Ivan", content: "Привет!"},
        ]
    };

    componentDidUpdate() {
        if (this.state.messages.length % 2 === 1) {
            const lastName = this.state.messages[this.state.messages.length - 1].name;
            setTimeout(() =>
                this.setState(
                    {
                        messages: [...this.state.messages,
                            {
                                // id: this.state.messages.length,
                                name: "Bot",
                                content:  lastName + ", не приставай ко мне, я робот!?"
                            }
                        ]
                    }), 1000
            );
        }
    }

    sendNewMessage = (message) => {
        this.setState((prevState) => {
            return {
                messages: prevState.messages.concat([message])
            };
        });
    }

    render() {
        const {messages} = this.state;
        return (
            <div className={"layout"}>
                <CssBaseline />
                <Container maxWidth="md">
                    <Header/>
                    <div className={"layout-wrap"}>
                        <ChatList/>
                        <MessageField messageList={messages}/>
                    </div>
                    <MessengerForm onSendMessage={this.sendNewMessage}/>
                </Container>

            </div>
        );
    }
}