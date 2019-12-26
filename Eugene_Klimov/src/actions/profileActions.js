import {getJSON, RSAA} from 'redux-api-middleware';

export const ADD_PROFILE = '@@profile/ADD_PROFILE';

export const addProfile = (title, description) => ({
  type: ADD_PROFILE,
  title,
  description,
});

export const START_PROFILES_LOADING = '@@profile/START_PROFILES_LOADING';
export const SUCCESS_PROFILES_LOADING = '@@profile/SUCCESS_PROFILES_LOADING';
export const ERROR_PROFILES_LOADING = '@@profile/ERROR_PROFILES_LOADING';

export const loadProfiles = () => ({
  [RSAA]: {
    endpoint: '/api/profiles.json',
    method: 'GET',
    types: [
      START_PROFILES_LOADING,
      {
        type: SUCCESS_PROFILES_LOADING,
        payload: (action, state, res) => getJSON(res).then(
          (json) => json,
        ),
      },
      ERROR_PROFILES_LOADING,
    ],
  },
});
