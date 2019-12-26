import {
    SEND_MESSAGE,
    DELETE_MESSAGES,
    IS_NEW
} from "../actions/messageActions";
import { DELETE_CHATS } from "../actions/chatActions";
import { RESET_STATE } from "../actions/profileActions";

const defaultState = {
    messages: {
        0: {
            name: "Vasia Pupkine",
            content:
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
            isNew: false
        },
        1: {
            name: "Doloremque",
            content:
                "In hac habitasse platea dictumst. Sed quis eros suscipit, tristique augue quis",
            isNew: false
        },
        2: {
            name: "Voluptatum",
            content:
                "Rerum totam dicta error, doloremque officiis rem molestias asperiores cupiditate,",
            isNew: false
        },
        3: {
            name: "Aspernatur",
            content: "Veritatis aliquam eaque provident voluptatum fuga?",
            isNew: false
        },
        4: {
            name: "Velit",
            content:
                "Velit quia id omnis incidunt fugit dolores hic, aperiam perspiciatis quidem natus. Velit quia id omnis incidunt fugit dolores hic, aperiam perspiciatis quidem natus.",
            isNew: false
        }
    }
};

export default function messageReducer(state = defaultState, action) {
    switch (action.type) {
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
                    content: state.messages[action.messageID].content,
                    isNew: false
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
