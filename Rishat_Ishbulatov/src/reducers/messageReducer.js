import {
    SEND_MESSAGE,
    DELETE_MESSAGES,
    IS_NEW
} from "../actions/messageActions";
import {
    START_LOADING_STATE,
    SUCCESS_LOADING_STATE,
    ERROR_LOADING_STATE
} from "../actions/apiActions";
import { DELETE_CHATS } from "../actions/chatActions";
import { RESET_STATE } from "../actions/apiActions";

const defaultState = {
    messages: {},
    isMessagesLoaging: false
};

export default function messageReducer(state = defaultState, action) {
    switch (action.type) {
    case START_LOADING_STATE:
        return {
            messages: {
                ...state.message
            },
            isMessagesLoaging: true
        };
    case SUCCESS_LOADING_STATE:
        return {
            messages: {
                ...action.payload.entities.messages
            },
            isMessagesLoaging: false
        };
    case ERROR_LOADING_STATE:
        return {
            messages: {
                ...state.messages
            },
            isMessagesLoaging: false
        };
    case SEND_MESSAGE: {
        return {
            messages: {
                ...state.messages,
                [action.messageID]: action.message
            }
        };
    }
    case IS_NEW: {
        return {
            messages: {
                ...state.messages,
                [action.messageID]: {
                    name: state.messages[action.messageID].name,
                    content: state.messages[action.messageID].content
                }
            }
        };
    }
    case DELETE_MESSAGES: {
        let messages = state.messages;
        action.messageIDs.forEach(element => {
            delete messages[element];
        });
        return {
            messages: {
                ...messages
            }
        };
    }
    case DELETE_CHATS: {
        return {
            messages: {}
        };
    }
    case RESET_STATE: {
        return {
            messages: {
                ...defaultState.messages
            }
        };
    }
    default:
        return state;
    }
}
