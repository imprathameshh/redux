//FIRST STEP
export const SET_FORM_VALUE = "SET_FORM_VALUE";

export const setFormDetails = (params) => {
  return {
    type: SET_FORM_VALUE,
    // UPDATE A VALUE
    payload: params,
  };
};
