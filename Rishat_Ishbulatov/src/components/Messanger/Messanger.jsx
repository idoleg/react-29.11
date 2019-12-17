import React, { Component } from "react";
import { Header } from "../Header/Header";
import { ChatList } from "../ChatList/ChatList";
import { MessageList } from "../MessageList/MessageList";
import PropTypes from "prop-types";
import("./Messenger.sass");

export class Messenger extends Component {
    botTimers = [];
    lastName = "";
    state = {
        chats: {
            0: {
                title: "chat-0",
                messageIDs: [0, 1]
            },
            1: {
                title: "chat-1",
                messageIDs: [2, 3]
            },
            2: {
                title: "chat-2",
                messageIDs: [4]
            }
        },
        messages: {
            0: {
                name: "Vasia Pupkine",
                content:
                    "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
            },
            1: {
                name: "Doloremque",
                content:
                    "In hac habitasse platea dictumst. Sed quis eros suscipit, tristique augue quis"
            },
            2: {
                name: "Voluptatum",
                content:
                    "Rerum totam dicta error, doloremque officiis rem molestias asperiores cupiditate,"
            },
            3: {
                name: "Aspernatur",
                content: "Veritatis aliquam eaque provident voluptatum fuga?"
            },
            4: {
                name: "Velit",
                content:
                    "Velit quia id omnis incidunt fugit dolores hic, aperiam perspiciatis quidem natus."
            }
        }
    };
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                id: PropTypes.string
            })
        })
    };
    onAddMessage = message => {
        this.botTimers.forEach(timer => clearTimeout(timer));
        this.botTimers = [];
        this.lastName = message.name;
        let { id } = this.props.match.params;
        if (id !== message.chatID) {
            return;
        }
        this.setState(prevState => {
            let { chats, messages } = prevState;
            let messageID = Object.keys(prevState.messages).length;
            return {
                messages: {
                    ...messages,
                    [messageID]: {
                        name: message.name,
                        content: message.content
                    }
                },
                chats: {
                    ...chats,
                    [message.chatID]: {
                        ...chats[message.chatID],
                        messageIDs: [
                            ...chats[message.chatID]["messageIDs"],
                            messageID
                        ]
                    }
                }
            };
        });
    };
    onAddChat = title => {
        this.setState(prevState => {
            let { chats } = prevState;
            let chatID = Object.keys(chats).length;
            chats[chatID] = {
                title: title ? title : `chat-${chatID}`,
                messageIDs: new Array()
            };
            return { chats };
        });
    };
    componentDidUpdate() {
        if (this.lastName === "" || this.lastName === "Robot") {
            return;
        }
        let { id } = this.props.match.params;
        this.botTimers.push(
            setTimeout(
                () =>
                    this.onAddMessage({
                        chatID: id,
                        name: "Robot",
                        content: `Hello, human, ${this.lastName}. I'm a robot from chat ${id}`
                    }),
                1000
            )
        );
    }

    render() {
        const { chats, messages } = this.state;
        let { id } = this.props.match.params;
        return (
            <div className="messenger">
                <Header id={id} />
                <ChatList chats={chats} onSubmit={this.onAddChat} />
                {id && (
                    <MessageList
                        chatID={id}
                        messages={chats[id].messageIDs.map(id => messages[id])}
                        onSubmit={this.onAddMessage}
                    />
                )}
            </div>
        );
    }
}
