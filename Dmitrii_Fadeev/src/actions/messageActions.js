import {createActions} from 'redux-actions';

export const ADD_MESSAGE = "ADD_MESSAGE";

export const {loadMessages, addMessage} = createActions({
    "LOAD_MESSAGES": () => ({}),
    "ADD_MESSAGE": (name, content) => ({name, content}),
});