import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import createMemoryHistory from "history/lib/createBrowserHistory";
import store from "./store";
import { Provider } from "react-redux";

import App from "./components/App";
import TodoPage from "./components/TodoPage";

const routes = (
  <Provider store={ store }>
    <Router history={ createMemoryHistory() }>
      <Route path="/" component={ App }>
        <IndexRoute component={ TodoPage } />
      </Route>
    </Router>
  </Provider>
);

export default routes;