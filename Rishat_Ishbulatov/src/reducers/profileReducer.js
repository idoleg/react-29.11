import {
    START_LOADING_PROFILE,
    SUCCESS_LOADING_PROFILE,
    ERROR_LOADING_PROFILE,
    RESET_STATE
} from "../actions/apiActions";

const defaultState = { profile: {}, isProfileLoading: false };

export default function profileReducer(state = defaultState, action) {
    switch (action.type) {
    case START_LOADING_PROFILE:
        return {
            profile: {
                ...state.profile
            },
            isProfileLoading: true
        };
    case SUCCESS_LOADING_PROFILE:
        return {
            profile: {
                ...action.payload
            },
            isProfileLoading: false
        };
    case ERROR_LOADING_PROFILE:
        return {
            profile: {
                ...state.profile
            },
            isProfileLoading: false
        };
    case RESET_STATE:
        return {
            profile: {
                ...defaultState.profile
            },
            isProfileLoading: false
        };
    default:
        return state;
    }
}
