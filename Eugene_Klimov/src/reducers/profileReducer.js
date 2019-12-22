import update from 'react-addons-update';
import {LOAD_PROFILES, ADD_PROFILE} from '../actions/profileActions';

const initialStore = {
  profiles: {
    // 1: {title: 'Урок №1', description: 'Введение в JavaScript'},
    // 2: {title: 'Урок №2', description: 'Погружение в React'},
    // 3: {title: 'Урок №3', description: 'Изучаем Redux'},
  },
};

export default function profileReducer(store = initialStore, action) {
  switch (action.type) {
    case LOAD_PROFILES: {
      return {
        profiles: {
          1: {title: 'Урок №1', description: 'Введение в JavaScript'},
          2: {title: 'Урок №2', description: 'Погружение в React'},
          3: {title: 'Урок №3', description: 'Изучаем Redux'},
        },
      };
    }
    case ADD_PROFILE: {
      const profileId = Object.keys(store.profiles).length + 1;
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
    default:
      return store;
  }
}
