export const SEND_MESSAGE = '@@message/SEND_MESSAGE';
export const DELETE_MESSAGE = '@@message/DELETE_MESSAGE';

export const sendMessage = (chatId, messageId, message) => ({
  type: SEND_MESSAGE,
  chatId,
  messageId,
  message,
});

export const deleteMessage = (chatId, messageId) => ({
  type: DELETE_MESSAGE,
  chatId,
  messageId,
});
