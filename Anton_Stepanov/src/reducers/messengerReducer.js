import { handleActions } from "redux-actions";
import { createChat } from "../actions/chatActions";
import { loadMessenger, sendMessage } from "../actions/messageActions";
import update  from "react-addons-update";

const defaultState = { chats: {}, messages: {} };

export default handleActions({
    [loadMessenger]: (state, { payload }) => {
        return {
            chats: {
                1: {
                    name: "First chat",
                    messages: [1],
                },
                2: {
                    name: "Second chat",
                    messages: [2],
                },
                3: {
                    name: "New chat",
                    messages: [3],
                }
            },
            messages: {
                1: { name: "Robot", content: "Привет путник, приветствую тебя в нашем чате!" },
                2: { name: "Robot", content: "Привет путник, приветствую тебя в нашем чате!" },
                3: { name: "Robot", content: "Привет путник, приветствую тебя в нашем чате!" },
            }
        }
    },
    [createChat]: (state, { payload: { name } }) => {
        const chatId = Object.keys(state.chats).length + 1;
        return update(state, {chats: {$merge: {[chatId]: {name: name, messages: []}}}});
    },
    [sendMessage]: (state, { payload: { chatId, message } }) => {
        const messageId = Object.keys(state.messages).length + 1;
        const messages = state.chats[chatId].messages;
        state = update(state, {chats: {[chatId]: {messages: {$push: [messageId]}}}});
        return update(state, {messages: {$merge: {[messageId]: message}}});
    }
}, defaultState);