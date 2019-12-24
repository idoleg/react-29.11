import update from 'react-addons-update';
import { SEND_MESSAGE } from '../actions/messageActions';

const initialStore = {
  messages: {
    1: { text: "Привет!", sender: 'bot', created: new Date(2019, 12, 17, 20, 11) },
    2: { text: "Здравствуйте!", sender: 'bot', created: new Date(2019, 12, 18, 21, 0) },
  },
};

export default function messageReducer(store = initialStore, action) {
  switch (action.type) {
    case SEND_MESSAGE: {
    //   return update(store, {
    //     chats: { $merge: { [action.chatId]: {
    //       title: store.chats[action.chatId].title,
    //       messageList: [...store.chats[action.chatId].messageList, action.messageId]
    //     } } },
    //   });
    return store;
}
    default:
      return store;
  }
}