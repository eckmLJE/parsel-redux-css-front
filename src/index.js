import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers/rootReducer";
import { createBrowserHistory } from "history";
import {
  connectRouter,
  routerMiddleware,
  ConnectedRouter
} from "connected-react-router";

const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(rootReducer),
  compose(
    applyMiddleware(routerMiddleware(history), thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
