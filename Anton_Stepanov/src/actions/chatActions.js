import {createActions} from "redux-actions";

export const {createChat} = createActions({
   "CREATE_CHAT": (name) => ({name}),
})