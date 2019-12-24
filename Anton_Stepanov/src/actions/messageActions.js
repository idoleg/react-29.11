import {createActions} from "redux-actions";

export const {loadMessenger, sendMessage} = createActions({
    "LOAD_MESSENGER": () => ({}),
    "SEND_MESSAGE": (chatId, message) => ({chatId, message}),
})