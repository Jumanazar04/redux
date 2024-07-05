import { createStore } from "redux";
import taskReducer from "./reducers/taskReducers";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(taskReducer, composeWithDevTools);

export default store;