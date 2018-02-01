import React from "react";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { history } from "./store.js";
import App from "./containers/App";
import Home from "./containers/Home";
import Detail from './containers/Detail';

// build the router
const router = (
  <Router  history={history}>

    <Route path="/" component={App}>
      <Route path="home" component={Home}/>
      <Route path="detail" component={Detail}/>
    </Route>
  </Router>
);

// export
export { router };
