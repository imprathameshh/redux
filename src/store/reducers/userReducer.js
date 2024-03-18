import { SET_FORM_VALUE } from "../action/actions";

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  if (action.type === SET_FORM_VALUE) {
    return {
      ...state, // FOR OLD VALUE
      user: action.payload,
    };
  }
  return state;
};

export default userReducer;
