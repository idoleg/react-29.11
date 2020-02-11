import {createActions} from 'redux-actions';

export const {addChat, notifyChat} = createActions({
    "ADD_CHAT": () => ({}),
    "NOTIFY_CHAT": (chatId) => ({chatId}),
});