import {SEND_MESSAGE, sendMessage} from '../actions/messageActions';
import {botName} from '../utils/constants';
import {formatDate} from '../utils/utils';

let botTimers = [];

const clearBots = () => {
  botTimers.forEach((timer) => clearTimeout(timer));
  botTimers = [];
};

export default (store) => (next) => (action) => {
  if (action.type === SEND_MESSAGE) {
    const {author} = action.message;
    if (author !== botName) {
      const chatName = store.getState().chatReducer.chats[action.chatId].title;
      clearBots();
      botTimers.push(setTimeout(() => store.dispatch(
        sendMessage(
          action.chatId, parseInt(Object.keys(
          store.getState().messageReducer.messages).pop()) + 1,
          {
            author: botName,
            content: `${author}, не понял, здесь чат "${chatName}"`,
            date: formatDate(),
          },
        )), 1000),
      );
    }
  }
  return next(action);
};
