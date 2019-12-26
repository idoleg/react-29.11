import update from 'react-addons-update';
import {SEND_MESSAGE, DELETE_MESSAGE} from '../actions/messageActions';
import {
  START_CHATS_LOADING,
  SUCCESS_CHATS_LOADING,
  ERROR_CHATS_LOADING,
} from '../actions/chatActions';

const initialStore = {
  messages: {},
};

export default function messageReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const message = action.message;
      return update(store, {
        messages: {
          $merge: {
            [action.messageId]: {
              author: message.author,
              content: message.content,
              date: message.date,
            },
          },
        },
      });
    }
    case DELETE_MESSAGE: {
      return update(store, {
        messages: {
          $merge: {
            [action.messageId]: null,
          },
        },
      });
    }
    case START_CHATS_LOADING: {
      return update(store, {
        isLoadingChats: {
          $set: true,
        },
      });
    }
    case SUCCESS_CHATS_LOADING: {
      return update(store, {
        messages: {
          $set: action.payload.entities.messages,
        },
      });
    }
    case ERROR_CHATS_LOADING: {
      return update(store, {
        isLoadingChats: {
          $set: false,
        },
      });
    }
    default:
      return store;
  }
}
