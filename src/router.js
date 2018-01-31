import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./containers/App";
import Home from "./containers/Home";
import Detail from './containers/Detail';
import NotFound from "./containers/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      {/* <IndexRoute component={Home}/> */}
      <Route exact path="/home" component={Home} />
      <Route path="/detail" component={Detail}/>
    </Route>
  </Router>
);

// export
export { router };
