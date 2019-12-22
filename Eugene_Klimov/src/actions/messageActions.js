export const LOAD_MESSAGES = '@@message/LOAD_MESSAGES';
export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const loadMessages = () => ({
  type: LOAD_MESSAGES,
});

export const sendMessage = (chatId, messageId, message) => ({
  type: SEND_MESSAGE,
  chatId,
  messageId,
  message,
});
