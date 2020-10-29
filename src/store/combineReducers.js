import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import queue from "./reducers/queue";
import indexOfCurrentCard from "./reducers/indexOfCurrentCard";

export default combineReducers({
   currentUser,
   queue,
   indexOfCurrentCard,
});
