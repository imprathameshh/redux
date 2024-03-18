//SEPERATING THE THINGS
const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICE_CREAM = "BUY_ICE_CREAM";
// ACTION
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
function butIceCream() {
  return {
    type: BUY_ICE_CREAM,
    info: "Second redux action",
  };
}

//INITIALIZE
const initialCake = {
  noOfCake: 12,
};
const initialIceCream = {
  noOfIceCream: 20,
};
// REDUCER
const reducerCake = (state = initialCake, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
    default:
      return state;
  }
};

const reducerIceCream = (state = initialIceCream, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM: {
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 1,
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: reducerCake,
  iceCream: reducerIceCream,
});

// STORE
const store = createStore(rootReducer, applyMiddleware(logger));

console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(butIceCream());

unsubscribe();
