import { combineReducers } from 'redux';
import comments from 'comments.js';
import users from 'users.js';
import { createStore } from 'redux';
const store = createStore(reducer);

const reducer = combineReducers({
  comments,
  users
});