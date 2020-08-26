import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/home.page";
import NoMatch from "./pages/error/404/error404.page";
import Contact from "./pages/contact/contact.page";
import Services from "./pages/services/services.page";
import Shop from "./pages/shop/shop.page";

import PageContext from "./context/page-context";
import "./App.scss";

function App() {
  const [value, setValue] = useState("/");

  return (
    <PageContext.Provider value={{ value, setValue }}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/shop">
              <Shop />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </PageContext.Provider>
  );
}

export default App;
