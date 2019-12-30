import { ADD_CHAT } from "../actions/chatActions";
import { sendMessage, SEND_MESSAGE } from "../actions/messageActions";
import { push } from "connected-react-router";

var botTimer = {};
const robotMiddleware = store => next => action => {
    switch (action.type) {
    case ADD_CHAT:
        botTimer = setTimeout(
            () =>
                store.dispatch(
                    sendMessage(action.chatID, {
                        name: "Robot",
                        content: `Hello, human. I'm a robot from ${action.title}`
                    })
                ),
            500
        );
        store.dispatch(push("/chats/" + action.chatID));
        break;
    case SEND_MESSAGE:
        if (action.message.name === "Robot") {
            return next(action);
        }
        clearTimeout(botTimer);
        const { chatID, chatTitle } = action;
        const { name } = action.message;
        botTimer = setTimeout(
            () =>
                store.dispatch(
                    sendMessage(chatID, {
                        name: "Robot",
                        content: `Hello, human ${name}. I'm a robot from ${chatTitle}`
                    })
                ),
            1000
        );
        break;
    }
    return next(action);
};

export default robotMiddleware;
