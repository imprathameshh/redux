import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReducer";
import iceCramReducer from "./iceCram/iceCreamReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCramReducer,
});

export default rootReducer;
