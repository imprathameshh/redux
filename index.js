const redux = require("redux");
const createStore = redux.createStore;

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
const initialState = {
  noOfCake: 12,
  noOfIceCream: 20,
};
// REDUCER
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCake: state.noOfCake - 1,
      };
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

// STORE
const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(butIceCream());
store.dispatch(butIceCream());
store.dispatch(butIceCream());

unsubscribe();
