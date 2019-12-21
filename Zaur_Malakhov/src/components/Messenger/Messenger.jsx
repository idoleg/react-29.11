import React, {Component} from "react";
import ("./Messenger.css");
import {MessageField} from "../MessageField/MessageField";
import {MessengerForm} from "../MessengerForm/MessengerForm";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import {Header} from "../Header/Header";
import {ChatList} from "../ChatList/ChatList";
import {ChatForm} from "../ChatForm/ChatForm";


export class Messenger extends Component {

    state = {
        chats: {
            1: {
                name: "java community", messages: [
                    { name: "Bot", content: "Привет из чата: java community!" }
                ]
            },
            2: {
                name: "javascript", messages: [
                    { name: "Bot", content: "Привет из чата: javascript!" }
                ]
            }
        },
    };

    timersOfBot = []

    componentDidUpdate() {

        const { id } = this.props.match.params;
        const name = this.state.chats[id].messages[this.state.chats[id].messages.length - 1].name;

        if (name != "Bot") {
            this.timersOfBot.push(setTimeout(() => this.sendNewMessage({ name: "Bot", content: `Привет ${name}, я робот в чате ${id}` }), 1000));
        }

    }

    addNewChat = (chat) => {
        this.setState((prevState) => {
            let chats = prevState.chats;

            let i = 0;
            for (let num in chats) {
                i = parseInt(num) +1;
            }
            chats[i] = chat;
            console.log(chats);
            return { chats };
        });
    }

    sendNewMessage = (message) => {
        const {id} = this.props.match.params;

        this.timersOfBot.forEach(timer => clearTimeout(timer));

        this.setState((prevState) => {
            const chats = prevState.chats;
            chats[id].messages = chats[id].messages.concat([message]);
            return { chats };
        });
    }

    render() {
        console.log(this.props);
        // console.log(this.props.match.params);
        // const {messages} = this.state;
        const { chats } = this.state;
        const {id} = this.props.match.params;

        return (
            <div className={"layout"}>
                <CssBaseline />
                <Container maxWidth="md">
                    <Header/>
                    <div className={"layout-wrap"}>
                        <ChatList chats={chats}/>
                        {/*<MessageField messageList={chats[id].messages}/>*/}
                        {chats[id] ? <MessageField messageList={chats[id].messages}/> : "Переписка не найдена"}
                    </div>
                    {/*<MessengerForm onSendMessage={this.sendNewMessage}/>*/}
                    <div className={"forms"}>
                        <ChatForm  onAddChat={this.addNewChat}/>
                        {chats[id] && <MessengerForm onSendMessage={this.sendNewMessage}/>}
                    </div>

                </Container>

            </div>
        );
    }
}