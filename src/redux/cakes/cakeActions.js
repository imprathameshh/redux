//THIS IS FIRST STEP IN REDUX WE CREATE ACTION

import { BUY_CAKE } from "./cakexConstant";

export const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};
