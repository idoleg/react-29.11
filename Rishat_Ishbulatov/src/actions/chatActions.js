import { createActions } from "redux-actions";

export const { loadChats, addChat, sendMessage } = createActions({
    "LOAD_CHATS": () => ({}),
    "ADD_CHAT": (title) => ({ title }),
    "SEND_MESSAGE": (message) => ({ message })
});