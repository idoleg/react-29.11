export const ADD_PROFILE = '@@profile/ADD_PROFILE';

export const addProfile = (title, description) => ({
  type: ADD_PROFILE,
  title,
  description,
});
