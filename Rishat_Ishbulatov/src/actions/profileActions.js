export const LOAD_PROFILE = "@@profile/LOAD_PROFILE";
export const RESET_STATE = "@@profile/RESET_STATE";

export const loadProfile = () => ({
    type: LOAD_PROFILE
});
export const resetState = () => ({
    type: RESET_STATE
});
