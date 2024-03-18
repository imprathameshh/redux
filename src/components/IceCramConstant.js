import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BUY_ICE_CREAM } from "../redux/iceCram/iceCreamConstat";

const IceCramConstant = () => {
  const iceCrameCount = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  const buyIceCream = () => {
    dispatch({ type: BUY_ICE_CREAM });
  };

  return (
    <div>
      <h2>Ice Cream {iceCrameCount}</h2>
      <button onClick={buyIceCream}>Buy Ice Cream</button>
    </div>
  );
};

export default IceCramConstant;
