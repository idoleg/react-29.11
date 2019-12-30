import { ADD_CHAT } from "../actions/chatActions";
import { SEND_MESSAGE } from "../actions/messageActions";
import { showNotice, hideNotice } from "../actions/chatActions";
import { LOCATION_CHANGE } from "connected-react-router";

var storedChatID = {};
const chatMiddleware = state => next => action => {
    switch (action.type) {
    case ADD_CHAT:
        createChat(action);
        break;
    case SEND_MESSAGE:
        if (!(action.chatID in state.getState().chatReducer.chats)) {
            createChat(action);
        }
        setTimeout(() => {
            state.dispatch(showNotice(action.chatID));
            storedChatID[action.chatID] = action.chatID;
            setTimeout(() => {
                if (
                    state.getState().router.location.pathname ===
                        "/chats/" + action.chatID
                ) {
                    state.dispatch(hideNotice(action.chatID));
                }
            }, 2000);
        }, 1000);
        break;
    case LOCATION_CHANGE:
        const addr = action.payload.location.pathname.split("/")[2];
        if (storedChatID[addr] && storedChatID[addr] == addr) {
            state.dispatch(hideNotice(storedChatID[addr]));
            delete storedChatID[addr];
        }
        break;
    }
    return next(action);
};

function createChat(action) {
    if (!action.chatID) {
        action.chatID = new Date().valueOf();
    }
    if (!action.title) {
        action.title = `chat-${action.chatID}`;
    }
    return action;
}

export default chatMiddleware;
