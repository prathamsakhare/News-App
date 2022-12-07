import "./App.css";

import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
// import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, Routes } from "react-router-dom";

export default class App extends Component {
  c = "John";
  // STEP 1 => you can declare variables here (top of the render())

  render() {
    return (
      <div>
        {/* Hello {this.c} my first class based component  */}
        {/* You can use all the declared variable inside the render */}

        <Router>
          <Navbar />
          {/* <News pageSize = {6} country="us" category="science"/> */}
          <Switch>
            <Route exact path="/">
              <News key="general" pageSize={6} country="us" category="general" />
            </Route>
            <Route exact path="/business">
              <News key="business" pageSize={6} country="us" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News key="entertainment" pageSize={6} country="us" category="entertainment" />
            </Route>
            <Route exact path="/health">
              <News key="health" pageSize={6} country="us" category="health" />
            </Route>
            <Route exact path="/science">
              <News key="science" pageSize={6} country="us" category="science" />
            </Route>
            <Route exact path="/sports">
              <News key="sports" pageSize={6} country="us" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News key="technology" pageSize={6} country="us" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
