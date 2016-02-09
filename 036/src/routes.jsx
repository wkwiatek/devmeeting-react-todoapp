import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import createHashHistory from "history/lib/createHashHistory";
import store from "./store";
import { Provider } from "react-redux";

import App from "./components/App";
import TodoPage from "./components/TodoPage";

//9/ Wykorzysujemy Router oraz Route 
const routes = (
  <Provider store={ store }>
    <Router history={ createHashHistory() }>
      <Route path="/" component={ App }>
        <IndexRoute component={ TodoPage } />
      </Route>
    </Router>
  </Provider>
);

export default routes;
