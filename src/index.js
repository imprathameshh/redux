import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

//EXTRA IMPORTED THINGS
import { Provider } from "react-redux";
import store from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

/* By wrapping your root component with <Provider> and passing the Redux store as a prop,
all components in your application that are connected to Redux (using the connect() function
or hooks like useSelector and useDispatch) will have access to the Redux store without needing
to pass it down manually through props at each level of your component hierarchy.*/
