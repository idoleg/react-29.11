import {createActions} from "redux-actions";

export const {loadMessages, sendMessage} = createActions({
    "LOAD_MESSAGES": () => ({}),
    "SEND_MESSAGE": (chatId, message) => ({chatId, message}),
})