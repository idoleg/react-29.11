import { handleActions } from "redux-actions";
import { loadProfile } from "../actions/profileActions";

const defaultState = { profile: {} };

export default handleActions({
    [loadProfile]: (state, { payload }) => {
        return {
            profile: {
                name: "Hello",
                content: "World!"
            }
        };
    }
}, defaultState);