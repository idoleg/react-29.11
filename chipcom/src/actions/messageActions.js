export const SEND_MESSAGE = '@@message/SEND_MESSAGE';

export const sendMessage = (messageId, text, sender, chatId, created) => ({
  type: SEND_MESSAGE,
  messageId,
  text,
  sender,
  chatId,
  created,
});