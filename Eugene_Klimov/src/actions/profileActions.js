export const LOAD_PROFILES = '@@profile/LOAD_PROFILES';
export const ADD_PROFILE = '@@profile/ADD_PROFILE';

export const loadProfiles = () => ({
  type: LOAD_PROFILES,
});

export const addProfile = (title, description) => ({
  type: ADD_PROFILE,
  title,
  description,
});
