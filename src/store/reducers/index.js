import { combineReducers } from 'redux';
import events from './eventReducer';
import todos from './todoReducer';
import user from './userReducer';

const appReducer = combineReducers({ events, todos, user });

export default appReducer;
