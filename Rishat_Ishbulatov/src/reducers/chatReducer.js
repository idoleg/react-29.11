import {
    ADD_CHAT,
    DELETE_CHAT,
    SHOW_NOTICE,
    HIDE_NOTICE
} from "../actions/chatActions";
import {
    START_LOADING_STATE,
    SUCCESS_LOADING_STATE,
    ERROR_LOADING_STATE
} from "../actions/apiActions";
import { SEND_MESSAGE, DELETE_MESSAGE } from "../actions/messageActions";
import { RESET_STATE } from "../actions/apiActions";

const defaultState = {
    chats: {},
    isChatsLoading: false
};

export default function chatReducer(state = defaultState, action) {
    switch (action.type) {
    case START_LOADING_STATE:
        return {
            chats: {
                ...state.chats
            },
            isChatsLoading: true
        };
    case SUCCESS_LOADING_STATE:
        return {
            chats: {
                ...action.payload.entities.chats
            },
            isChatsLoading: false
        };
    case ERROR_LOADING_STATE:
        return {
            chats: {
                ...state.chats
            },
            isChatsLoading: false
        };
    case ADD_CHAT:
        return {
            chats: {
                ...state.chats,
                [action.chatID]: { title: action.title, messageIDs: [] }
            }
        };
    case DELETE_CHAT:
        const { chats } = state;
        delete chats[action.chatID];
        return {
            chats: {
                ...chats
            }
        };
    case SEND_MESSAGE:
        if (!(action.chatID in state.chats)) {
            return {
                chats: {
                    ...state.chats,
                    [action.chatID]: {
                        title: action.title,
                        messageIDs: [action.messageID]
                    }
                }
            };
        }
        return {
            chats: {
                ...state.chats,
                [action.chatID]: {
                    ...state.chats[action.chatID],
                    messageIDs: [
                        ...state.chats[action.chatID]["messageIDs"],
                        action.messageID
                    ]
                }
            }
        };
    case DELETE_MESSAGE:
        const { messageIDs } = state.chats[action.chatID];
        messageIDs.splice(messageIDs.indexOf(action.messageID), 1);
        return {
            chats: {
                ...state.chats,
                [action.chatID]: {
                    title: state.chats[action.chatID].title,
                    messageIDs: messageIDs
                }
            }
        };
    case RESET_STATE:
        return defaultState;
    case SHOW_NOTICE:
        return {
            chats: {
                ...state.chats,
                [action.chatID]: {
                    title: state.chats[action.chatID].title,
                    messageIDs: state.chats[action.chatID].messageIDs,
                    notice: true
                }
            }
        };
    case HIDE_NOTICE:
        return {
            chats: {
                ...state.chats,
                [action.chatID]: {
                    title: state.chats[action.chatID].title,
                    messageIDs: state.chats[action.chatID].messageIDs,
                    notice: false
                }
            }
        };
    default:
        return state;
    }
}
