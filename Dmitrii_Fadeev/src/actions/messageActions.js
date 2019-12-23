import {createActions} from 'redux-actions';

export const {loadMessages, addMessage} = createActions({
    "LOAD_MESSAGES": () => ({}),
    "ADD_MESSAGE": (name, content) => ({name, content}),
});