export const START_LOADING_STATE = "@@api/START_LOADING_STATE";
export const SUCCESS_LOADING_STATE = "@@api/SUCCESS_LOADING_STATE";
export const ERROR_LOADING_STATE = "@@api/ERROR_LOADING_STATE";
export const START_LOADING_PROFILE = "@@api/START_LOADING_PROFILE";
export const SUCCESS_LOADING_PROFILE = "@@api/SUCCESS_LOADING_PROFILE";
export const ERROR_LOADING_PROFILE = "@@api/ERROR_LOADING_PROFILE";
export const RESET_STATE = "@@api/RESET_STATE";
import { normalize } from "normalizr";
import { wait } from "../utils/helpers";
import { chats } from "../utils/schemas";
import { RSAA, getJSON } from "redux-api-middleware";

export const loadState = () => ({
    [RSAA]: {
        endpoint: "/api/test.json",
        method: "GET",
        types: [
            START_LOADING_STATE,
            {
                type: SUCCESS_LOADING_STATE,
                payload: (action, state, res) =>
                    getJSON(res)
                        .then(json => wait(2000, json))
                        .then(json => normalize(json, [chats]))
            },
            ERROR_LOADING_STATE
        ]
    }
});

export const loadProfile = () => ({
    [RSAA]: {
        endpoint: "/api/profile.json",
        method: "GET",
        types: [
            START_LOADING_PROFILE,
            {
                type: SUCCESS_LOADING_PROFILE,
                payload: (action, state, res) => getJSON(res).then(json => json)
            },
            ERROR_LOADING_PROFILE
        ]
    }
});

export const resetState = () => ({
    type: RESET_STATE
});
