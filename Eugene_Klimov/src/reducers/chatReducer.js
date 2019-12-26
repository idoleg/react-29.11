import update from 'react-addons-update';
import {getNullCountObject} from '../utils/utils';
import {
  ADD_CHAT,
  DELETE_CHAT,
  SUCCESS_CHATS_LOADING,
} from '../actions/chatActions';
import {SEND_MESSAGE, DELETE_MESSAGE} from '../actions/messageActions';

const initialStore = {
  chats: {},
  isLoadingChats: true,
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const id = action.chatId;
      const chat = store.chats[id];
      return update(store, {
        chats: {
          $merge: {
            [id]: {
              title: chat.title,
              messageList: [...chat.messageList,
                action.messageId],
            },
          },
        },
      });
    }
    case ADD_CHAT: {
      for (const chat of Object.entries(store.chats)) {
        if (chat[1] === null) {
          continue;
        }
        if (chat[1].title === action.title || action.title === '') {
          alert('Недопустимое имя чата!');
          return store;
        }
      }
      const chatId = parseInt(Object.keys(store.chats).pop()) + 1;
      return update(store, {
        chats: {
          $merge: {
            [chatId]: {
              title: action.title, messageList: [],
            },
          },
        },
      });
    }
    case DELETE_MESSAGE: {
      const {chatId, messageId} = action;
      const newList = store.chats[chatId].messageList.filter(
        (id) => id !== messageId,
      );
      return update(store, {
        chats: {
          $merge: {
            [chatId]: {
              title: store.chats[chatId].title,
              messageList: newList,
            },
          },
        },
      });
    }
    case DELETE_CHAT: {
      if (Object.keys(store.chats).length - 1 ===
        getNullCountObject(store.chats)) {
        alert('Нельзя удалить последний чат!');
        return store;
      }
      return update(store, {
        chats: {
          $merge: {
            [action.chatId]: null,
          },
        },
      });
    }
    case SUCCESS_CHATS_LOADING: {
      return update(store, {
        chats: {
          $set: action.payload.entities.chats,
        },
        isLoadingChats: {
          $set: false,
        },
      });
    }
    default:
      return store;
  }
}
