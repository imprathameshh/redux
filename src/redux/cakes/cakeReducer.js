// THIS IS SECOND STEP OF CREATE A REDUCER

import { BUY_CAKE } from "./cakeConstant";

// FIRST STEP OF REDUCER
const initialState = {
  numOfCake: 10,
};

// SECOND STEP
const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1,
      };
    default:
      return state;
  }
};
export default cakeReducer;
