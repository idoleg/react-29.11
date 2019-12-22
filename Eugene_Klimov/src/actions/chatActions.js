export const LOAD_CHATS = '@@chat/LOAD_CHATS';
export const ADD_CHAT = '@@chat/ADD_CHAT';

export const loadChats = () => ({
  type: LOAD_CHATS,
});

export const addChat = (title) => ({
  type: ADD_CHAT,
  title,
});
