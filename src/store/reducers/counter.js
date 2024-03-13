// DEFINE A INITIAL VALUE OF COUNTER
const initial_value = {
  no: 10,
};

// state: GETTING A INITIAL VALUE WITH HELP OF PROPS
// action:
const counter = (state = initial_value, action) => {
  // DEFINE AN ACTION
  if (action.type == "increment") {
    return {
      no: state.no + 1,
    };
  }
  if (action.type == "decrement") {
    return {
      no: state.no - 1,
    };
  }

  return { ...state };
};

export default counter;
