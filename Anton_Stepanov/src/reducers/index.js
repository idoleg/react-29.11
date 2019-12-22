import {combineReducers} from "redux";
import messengerReducer from "./messengerReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
   messenger: messengerReducer,
   profile: profileReducer,
});