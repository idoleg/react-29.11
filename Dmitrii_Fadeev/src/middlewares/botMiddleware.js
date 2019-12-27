import {addMessage} from '../actions/messageActions';
import {addChat, notifyChat} from "../actions/chatActions";
import update from 'react-addons-update';
/*
export function botMiddleware(store) {
    return function (next) {
        return function (action) {
            switch (action.type) {
                case addMessage.toString(): {
                    if (action.payload.message.name != 'Bot') {
                        const {chatId, message: {name}} = action.payload;
                        setTimeout(() => store.dispatch(addMessage(chatId, {name: 'Bot', content: `Test passed from MW ${name} in chat ${chatId}`})), 2000);
                    }
                }
            }

            return next(action);
        }
    }
}
 */

let timer = null;
let timers = [];

export const botMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case addMessage.toString(): {
            if (action.payload.message.name != 'Bot') {
                const {chatId, message: {name}} = action.payload;
                timer = setTimeout(() => {
                    store.dispatch(addMessage(chatId, {name: 'Bot', content: `Test passed from MW ${name} in chat ${chatId}`}));
                }, 5000);
                timers.push(timer);
            }
        }
            const {chatId} = action.payload;
            store.dispatch(notifyChat(chatId));
            setTimeout(() => store.dispatch(notifyChat(null)), 2000);
    }
    return next(action);
};
