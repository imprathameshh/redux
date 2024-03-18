import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BUY_CAKE } from "../redux/cakes/cakeConstant";

const CakeContainer = () => {
  const cakeCount = useSelector((state) => state.numOfCake); // Accessing numOfCake
  const dispatch = useDispatch();

  const buyCake = () => {
    dispatch({ type: BUY_CAKE });
  };

  return (
    <div>
      <h2>Number of Cakes - {cakeCount}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
};

export default CakeContainer;
