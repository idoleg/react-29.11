export const ADD_CHAT = '@@chat/ADD_CHAT';
export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const addChat = (title) => ({
  type: ADD_CHAT,
  title,
});

export const sendMessage = (messageId, text, sender, chatId, created) => ({
  type: SEND_MESSAGE,
  messageId,
  text,
  sender,
  chatId,
  created,
});