import { sendMessage, addChat } from "../actions/messageActions";
import {push} from "connected-react-router";
/*export function botMiddleware(store) {
    return function (next) {
        return function (action) {
            if (action.type == sendMessage.toString() && action.payload.message.name !== "Bot") {
                const { chatId, message: { name } } = action.payload;
                setTimeout(() => store.dispatch(sendMessage(chatId, { name: "Bot", content: `Привет ${name}, я робот в чате ${chatId}` })), 1000)
            }
            return next(action)

        }
    }
}*/

export const botMiddleware = store => next => action => {
    if (action.type == sendMessage.toString() && action.payload.message.name !== "Bot") {
        const { chatId, message: { name } } = action.payload;
        setTimeout(() => store.dispatch(sendMessage(chatId, { name: "Bot", content: `Привет ${name}, я робот в чате ${chatId}` })), 1000)
    } else if (action.type == addChat.toString()) {
        action.payload.chatId = (new Date).valueOf();
        setTimeout(() => store.dispatch(sendMessage(action.payload.chatId, { name: "Bot", content: `Рад тебя видеть в новом чате ${action.payload.name}` })), 500)
        store.dispatch(push("/chats/"+action.payload.chatId));
    }
    return next(action)

}
