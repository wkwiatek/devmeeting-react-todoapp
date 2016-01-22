import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import createMemoryHistory from "history/lib/createBrowserHistory";
import store from "app/store";
import { Provider } from "react-redux";

import App from "app/components/App";
import TodoPage from "app/components/TodoPage";
import FormPage from "app/components/FormPage";

const routes = (
  <Provider store={ store }>
    <Router history={ createMemoryHistory() }>
      <Route path="/" component={ App }>
        <IndexRoute component={ TodoPage } />
        <Route path="/form" component={ FormPage } />
      </Route>
    </Router>
  </Provider>
);

export default routes;
