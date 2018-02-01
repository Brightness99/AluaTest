import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import nav from './nav';
import member from "./member";
// main reducers
export const reducers = combineReducers({
  routing: routerReducer,
  nav: nav,
  member: member,
});
