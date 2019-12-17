import { handleActions } from "redux-actions";
import { loadMessages, sendMessage } from "../actions/messageActions";
import update  from "react-addons-update";

const defaultState = { chats: {} };

export default handleActions({
    [loadMessages]: (state, { payload }) => {
        return {
            chats: {
                1: {
                    name: "It's chat #1", messages: [
                        { name: "Bot", content: "Привет из чата 1!" }
                    ]
                },
                2: {
                    name: "It's chat #2", messages: [
                        { name: "Bot", content: "Привет из чата 2!" }
                    ]
                },
                3: {
                    name: "It's chat #3", messages: [
                        { name: "Bot", content: "Привет из чата 3!" }
                    ]
                }
            }
        }
    },
    [sendMessage]: (state, { payload: { chatId, message } }) => {

        return update(state, {
            chats: {
                [chatId]: {messages: {$push: [message]}}
            }
        }
        );
    }
}, defaultState);


/*
chats: {
                    [chatId]: {messages: {$push: [message]}}
                }
            }

            $merge: {
                    [chatId]: {
                        name: state.chats[chatId].name,
                        messages: [...state.chats[chatId].messages, message]
                    }
                }
*/