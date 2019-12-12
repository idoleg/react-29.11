import React, { Component } from "react";
import { MessageList } from "../MessageList/MessageList";
import { MessengerForm } from "../MessengerForm/MessengerForm";
import("./Messenger.css");

export class Messenger extends Component {
    state = {
        messages: [
            {
                name: "Vasia Pupkine",
                content:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            },
            {
                name: "Doloremque",
                content:
                    "In hac habitasse platea dictumst. Sed quis eros suscipit, tristique augue quis"
            },
            {
                name: "Voluptatum",
                content:
                    "Rerum totam dicta error, doloremque officiis rem molestias asperiores cupiditate,"
            },
            {
                name: "Aspernatur",
                content: "Veritatis aliquam eaque provident voluptatum fuga?"
            },
            {
                name: "Velit",
                content:
                    "Velit quia id omnis incidunt fugit dolores hic, aperiam perspiciatis quidem natus."
            }
        ]
    };

    sendNewMessage = message => {
        this.setState(prevState => {
            return { messages: prevState.messages.concat([message]) };
        });
    };

    componentDidUpdate() {
        const name = this.state.messages[this.state.messages.length - 1].name;
        if (name != "Robot") {
            setTimeout(
                () =>
                    this.sendNewMessage({
                        name: "Robot",
                        content: "Hello, human," + name + "."
                    }),
                1000
            );
        }
    }

    render() {
        const { messages } = this.state;
        return (
            <div className="messenger">
                <MessageList messages={messages}></MessageList>
                <MessengerForm onSendMessage={this.sendNewMessage} />
            </div>
        );
    }
}
