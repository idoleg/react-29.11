export const ADD_CHAT = "@@chat/ADD_CHAT";
export const DELETE_CHAT = "@@chat/DELETE_CHAT";
export const SHOW_NOTICE = "@@chat/SHOW_NOTICE";
export const HIDE_NOTICE = "@@chat/HIDE_NOTICE";

export const addChat = (title, chatID = null) => ({
    type: ADD_CHAT,
    title,
    chatID
});
export const deleteChat = chatID => ({
    type: DELETE_CHAT,
    chatID
});
export const showNotice = chatID => ({
    type: SHOW_NOTICE,
    chatID
});
export const hideNotice = chatID => ({
    type: HIDE_NOTICE,
    chatID
});
