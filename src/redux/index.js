import reducer from "./reducer"
import { createLogger } from "redux-logger";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  reducer: reducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
