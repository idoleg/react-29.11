import {createActions} from "redux-actions";

export const {loadProfile, changeName} = createActions({
    "LOAD_PROFILE": () => ({}),
    "CHANGE_NAME": (name) => ({name}),
})