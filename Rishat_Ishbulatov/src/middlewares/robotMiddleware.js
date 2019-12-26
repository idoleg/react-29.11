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
                        content: `Hello, human. I'm a robot from chat with ID ${action.chatID}.`,
                        isNew: true
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
        let name = action.message.name;
        let chatID = action.chatID;
        botTimer = setTimeout(
            () =>
                store.dispatch(
                    sendMessage(action.chatID, {
                        name: "Robot",
                        content: `Hello, human ${name}. I'm a robot from chat with ID ${chatID}.`,
                        isNew: true
                    })
                ),
            1000
        );
        break;
    }
    return next(action);
};

export default robotMiddleware;
