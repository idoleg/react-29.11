export const SEND_MESSAGE = "@@message/SEND_MESSAGE";
export const DELETE_MESSAGE = "@@message/DELETE_MESSAGE";
export const IS_NEW = "@@message/IS_NEW";

export const sendMessage = (chatID, message) => ({
    type: SEND_MESSAGE,
    chatID,
    message
});
export const deleteMessage = (chatID, messageID) => ({
    type: DELETE_MESSAGE,
    chatID,
    messageID
});
export const isNew = messageID => ({
    type: IS_NEW,
    messageID
});
