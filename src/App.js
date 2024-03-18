import CakeContainer from "./components/CakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import IceCramConstant from "./components/IceCramConstant";

function App() {
  return (
    <>
      <Provider store={store}>
        <IceCramConstant />
        <CakeContainer />
      </Provider>
    </>
  );
}

export default App;
