import update from 'react-addons-update';
import {
  ADD_PROFILE,
  START_PROFILES_LOADING,
  SUCCESS_PROFILES_LOADING,
  ERROR_PROFILES_LOADING,
} from '../actions/profileActions';
import {DELETE_CHAT} from '../actions/chatActions';
import {getNullCountObject} from '../utils/utils';

const initialStore = {
  profiles: {},
  isLoadingProfiles: false,
};

export default function profileReducer(store = initialStore, action) {
  switch (action.type) {
    case ADD_PROFILE: {
      const profileId = parseInt(Object.keys(store.profiles).pop()) + 1;
      return update(store, {
        profiles: {
          $merge: {
            [profileId]: {
              title: action.title,
              description: action.description,
            },
          },
        },
      });
    }
    case DELETE_CHAT: {
      if (Object.keys(store.profiles).length - 1 ===
        getNullCountObject(store.profiles)) {
        return store;
      }
      return update(store, {
        profiles: {
          $merge: {
            [action.chatId]: null,
          },
        },
      });
    }
    case START_PROFILES_LOADING: {
      return update(store, {
        isLoadingProfiles: {
          $set: true,
        },
      });
    }
    case SUCCESS_PROFILES_LOADING: {
      const profiles = {};
      action.payload.forEach((msg) => {
        const {id, title, description} = msg;
        profiles[id] = {title, description};
      });
      return update(store, {
        profiles: {
          $set: profiles,
        },
        isLoadingProfiles: {
          $set: false,
        },
      });
    }
    case ERROR_PROFILES_LOADING: {
      return update(store, {
        isLoadingProfiles: {
          $set: false,
        },
      });
    }
    default:
      return store;
  }
}
