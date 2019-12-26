import {
    SEND_MESSAGE,
    DELETE_MESSAGES,
    isNew
} from "../actions/messageActions";
import { showNotice, hideNotice } from "../actions/chatActions";
import { LOCATION_CHANGE } from "connected-react-router";

const messageMiddleware = state => next => action => {
    switch (action.type) {
    case SEND_MESSAGE:
        action.messageID = new Date().valueOf();
        action.message.isNew = true;
        setTimeout(() => state.dispatch(isNew(action.messageID)), 2000);
        break;
    case DELETE_MESSAGES:
        action.messageIDs = state.getState().chatReducer.chats[
            action.chatID
        ].messageIDs;
        break;
    }
    return next(action);
};
export default messageMiddleware;
