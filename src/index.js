import React from "react";
import ReactDOM from "react-dom";
import "./styles/normalize.css";
import "./styles/index.css";
import App from "./components/App";
import store from "./store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import axios from "axios";
import refreshToken from "./utils/refreshToken";

import { BrowserRouter as Router } from "react-router-dom";

// axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/http://090809ae5471.ngrok.io';

axios.defaults.baseURL = "http://134.122.91.61:8000";

axios.defaults.headers.common = {
  "X-Requested-With": "XMLHttpRequest",
};

if (localStorage.getItem("token")) {
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;

  refreshToken(axios);
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
