import { handleActions } from "redux-actions";
import { loadChats, addChat, sendMessage } from "../actions/chatActions";
import update from "react-addons-update";

const defaultState = { chats: {}, messages: {} };

export default handleActions({
    [loadChats]: (state, { payload }) => {
        return {
            chats: {
                1: {
                    title: "chat-1",
                    messageIDs: [0, 1]
                },
                2: {
                    title: "chat-2",
                    messageIDs: [2, 3]
                },
                3: {
                    title: "chat-3",
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
    },
    [addChat]: (state, { payload: { title } }) => {
        const chatID = Object.keys(state.chats).length + 1;
        title = title ? title : `chat-${chatID}`;
        return update(state, {
            chats: {
                $merge: {
                    [chatID]: {
                        title: title, messageIDs: []
                    }
                }
            }
        });
    },
    [sendMessage]: (state, { payload: { message } }) => {
        let messageID = Object.keys(state.messages).length;
        return update(state, {
            messages: {
                $merge: {
                    [messageID]: {
                        name: message.name,
                        content: message.content
                    }
                }
            },
            chats: {
                [message.chatID]: { messageIDs: { $push: [messageID] } }
            }
        });
    },
}, defaultState);