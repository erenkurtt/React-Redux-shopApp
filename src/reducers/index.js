import {combineReducers} from "redux";
import {basketReducer, reducer , searchReducer} from "./counterReducer";


const reducers = combineReducers({
    basketReducer,
    reducer,
    searchReducer
});

export default reducers;
