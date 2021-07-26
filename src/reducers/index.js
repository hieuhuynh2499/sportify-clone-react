import { combineReducers } from "redux";
import songReducer from "./songReducers";
import addSongReducer from "./addSongReducer";



const rootReducers = combineReducers({
    songReducer,
    addSongReducer,
});

export default rootReducers;