import {handleActions} from 'redux-actions';
import {loadMessages, addMessage} from '../actions/messageActions';
import update from 'react-addons-update';

const defaultState = {
    chats: {}
};

export default handleActions({
    [loadMessages]: (state, {payload}) => {
        return {
            chats: {
            1: {
                name: "1",
                messages: []
            },
            2: {
                name: "2",
                messages: []
            },
            3: {
                name: "3",
                messages: []
            }
            }
        }
    },
    [addMessage]: (state, {payload: {chatId, message}}) => {
        return update(state, {
            chats: {
                    [chatId]: {messages: {$push: [message]}}
            }
        });
    }
}, defaultState);