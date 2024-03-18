import { BUY_ICE_CREAM } from "./iceCreamConstat";

const initialIceCream = {
  numOfIceCream: 12,
};

const iceCramReducer = (state = initialIceCream, action) => {
  switch (action.type) {
    case BUY_ICE_CREAM:
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - 1,
      };
    default:
      return state;
  }
};
export default iceCramReducer;
