import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  // TO GETTING A STORE VALUE
  const countNo = useSelector((store) => store.count.no);

  // DEFINE useDispatch
  const dispatch = useDispatch();

  // ON CLICK ACTION
  const increment = () => {
    dispatch({ type: "increment" });
  };
  const decrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <>
      <button onClick={increment}>increment</button>
      <h3>{countNo}</h3>
      <button onClick={decrement}>decrement</button>
    </>
  );
};

export default Counter;

/* useSelector is a hook provided by the react-redux library, which allows functional
components in a React application to extract data from the Redux store state.
It's a part of the React Redux Hooks API introduced in React Redux version 7.1.0. */

/* useDispatch is another hook provided by the react-redux library, part of the React
Redux Hooks API. It allows functional components in a React application to dispatch
actions to the Redux store. */
