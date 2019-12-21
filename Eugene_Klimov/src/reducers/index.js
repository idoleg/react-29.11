import {combineReducers} from 'redux';
import chatReducer from './chatReducer';
import messageReducer from './messageReducer';
import profileReducer from './profileReducer';

export default combineReducers({
  chatReducer,
  messageReducer,
  profileReducer,
});
