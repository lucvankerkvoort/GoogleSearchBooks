import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Searchpage from "./pages/searchPage";
import Savedpage from "./pages/savedPage";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Searchpage} />
          <Route exact path="/save" component={Savedpage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
