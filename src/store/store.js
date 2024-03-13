import { combineReducers, createStore } from "redux";
import counter from "./reducers/counter";

const store = createStore(
  combineReducers({
    count: counter,
  })
);

export default store;

/* createStore : createStore takes in a reducer function as its argument.
The reducer function specifies how the application's state should change
in response to dispatched actions. The store returned by createStore has
methods like getState, dispatch, and subscribe that allow you to interact with the state and manage its updates. */

/* combineReducers : We use combineReducers to combine these reducers into a single reducer function called rootReducer. */
