import update from 'react-addons-update';
import {SEND_MESSAGE} from '../actions/messageActions';
import {DELETE_MESSAGE} from '../actions/messageActions';
import {formatDate} from '../utils/utils';
import {botName} from '../utils/constants';

const initialStore = {
  messages: {
    1: {
      author: botName,
      content: 'Привет!',
      date: formatDate(),
    },
    2: {
      author: botName,
      content: 'Вы в чатике \"Урок №1\"',
      date: formatDate(),
    },
    3: {
      author: botName,
      content: 'Привет!',
      date: formatDate(),
    },
    4: {
      author: botName,
      content: 'Вы в чатике \"Урок №2\"',
      date: formatDate(),
    },
    5: {
      author: botName,
      content: 'Приветик! Вы в чатике \"Урок №3\"',
      date: formatDate(),
    },
  },
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
      delete store.messages[action.messageId];
      return update(store, {
        messages: {
          $merge: {},
        },
      });
    }
    default:
      return store;
  }
}
