import {applyMiddleware, combineReducers, createStore} from 'redux';
import usersListReducer from './users-list/users-list.reducer'
import logger from "redux-logger";
import aboutUsListReducer from './about-us/about-us.reducer'
import thunk from "redux-thunk";

const reducer = combineReducers({
    usersListReducer: usersListReducer,
    aboutUsListReducer: aboutUsListReducer
});

const store = createStore(
    reducer,
    applyMiddleware(logger, thunk)
);

export type IRootStore = ReturnType<typeof reducer>;

export default store;