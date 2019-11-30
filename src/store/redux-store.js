import { combineReducers } from "redux";
import searchResultList from './reducers/launchReducer';

const appReducer = combineReducers({
    launchData: searchResultList
});

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer;