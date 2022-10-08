import { combineReducers } from "redux";
import todos from "../modules/todos";

const routeReducers = combineReducers({ todos });

export default routeReducers;
