import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import personalInfoReducer from "./reducers/personalInfoReducer.tsx";
import experienceReducer from "./reducers/experienceReducer.tsx";
import educationReducer from "./reducers/educationReducer.tsx";

const reducer = combineReducers({
  personalInfo: personalInfoReducer,
  experience: experienceReducer,
  education: educationReducer,
});

const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
