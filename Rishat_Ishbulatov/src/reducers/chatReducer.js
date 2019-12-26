import {
    ADD_CHAT,
    DELETE_CHATS,
    SHOW_NOTICE,
    HIDE_NOTICE
} from "../actions/chatActions";
import { SEND_MESSAGE, DELETE_MESSAGES } from "../actions/messageActions";
import { RESET_STATE } from "../actions/profileActions";

const defaultState = {
    chats: {
        1: {
            title: "chat-1",
            messageIDs: [0, 1],
            notice: false
        },
        2: {
            title: "chat-2",
            messageIDs: [2, 3],
            notice: false
        },
        3: {
            title: "chat-3",
            messageIDs: [4],
            notice: false
        }
    }
};

export default function chatReducer(state = defaultState, action) {
    switch (action.type) {
    case ADD_CHAT:
        return {
            chats: {
                ...state.chats,
                [action.chatID]: { title: action.title, messageIDs: [] }
            }
        };
    case DELETE_CHATS:
        return {
            chats: {}
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
    case DELETE_MESSAGES:
        return {
            chats: {
                ...state.chats,
                [action.chatID]: {
                    title: state.chats[action.chatID].title,
                    messageIDs: []
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
