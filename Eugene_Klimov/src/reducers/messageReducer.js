import update from 'react-addons-update';
import {LOAD_MESSAGES, SEND_MESSAGE} from '../actions/messageActions';
import {formatDate} from '../utils/utils';

const initialStore = {
  messages: {},
};

export default function messageReducer(store = initialStore, action) {
  switch (action.type) {
    case LOAD_MESSAGES: {
      return {
        messages: {
          1: {
            author: 'Клим',
            content: 'Привет!',
            date: formatDate(),
          },
          2: {
            author: 'Клим',
            content: 'Вы в чатике \"Урок №1\"',
            date: formatDate(),
          },
          3: {
            author: 'Клим',
            content: 'Привет!',
            date: formatDate(),
          },
          4: {
            author: 'Клим',
            content: 'Вы в чатике \"Урок №2\"',
            date: formatDate(),
          },
          5: {
            author: 'Клим',
            content: 'Приветик! Вы в чатике \"Урок №3\"',
            date: formatDate(),
          },
        },
      };
    }
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
    default:
      return store;
  }
}

