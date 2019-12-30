import { SEND_MESSAGE, isNew } from "../actions/messageActions";
import { formatDate } from "../utils/helpers";

const messageMiddleware = state => next => action => {
    switch (action.type) {
    case SEND_MESSAGE:
        action.messageID = new Date().valueOf();
        action.chatTitle = state.getState().chatReducer.chats[
            action.chatID
        ].title;
        action.message = {
            name: action.message.name || "Anonymous",
            content: action.message.content,
            date: formatDate(),
            isNew: true
        };
        setTimeout(() => state.dispatch(isNew(action.messageID)), 2000);
        break;
    }
    return next(action);
};
export default messageMiddleware;
