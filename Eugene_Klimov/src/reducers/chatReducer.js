import update from 'react-addons-update';
import {LOAD_CHATS, ADD_CHAT} from '../actions/chatActions';
import {SEND_MESSAGE} from '../actions/messageActions';

const initialStore = {
  chats: {},
};

export default function chatReducer(store = initialStore, action) {
  switch (action.type) {
    case LOAD_CHATS: {
      return {
        chats: {
          1: {title: 'Урок №1', messageList: [1, 2]},
          2: {title: 'Урок №2', messageList: [3, 4]},
          3: {title: 'Урок №3', messageList: [5]},
        },
      };
    }
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
        if (chat[1].title === action.title || action.title === '') {
          alert('Недопустимое имя чата!');
          return store;
        }
      }
      const chatId = Object.keys(store.chats).length + 1;
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
    default:
      return store;
  }
}
