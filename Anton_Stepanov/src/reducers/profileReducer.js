import { handleActions } from "redux-actions";
import { loadProfile, changeName } from "../actions/profileActions";
import update  from "react-addons-update";

const defaultState = { name: '' };

export default handleActions({
    [loadProfile]: (state, { payload }) => {
        return {
            name: "Anton"
        }
    },
    [changeName]: (state, { payload: { name } }) => {
        return update(state, {name: name});
    }
}, defaultState);