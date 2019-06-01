import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers";
import Home from "./components/Home";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;
