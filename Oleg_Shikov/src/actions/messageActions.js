import {createActions} from "redux-actions";

export const {loadMessages, sendMessage, addChat} = createActions({
    "LOAD_MESSAGES": () => ({}),
    "SEND_MESSAGE": (chatId, message) => ({chatId, message}),
    "ADD_CHAT": (name, chatId = null) => ({chatId, name, messages: []}),
})