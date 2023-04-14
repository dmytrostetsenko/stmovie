import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import moviesReducer from "./reducers/movies.reducer";
import logger from "redux-logger";

export const store = createStore(moviesReducer, applyMiddleware(thunk, logger));
