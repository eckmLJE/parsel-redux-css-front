import React, { Component } from "react";
import "./App.css";

import { Route } from "react-router-dom";

import HeaderLogo from "./components/HeaderLogo";
import Home from "./views/Home";
import StatementView from "./views/StatementView";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-column">
          <HeaderLogo />
          <Route exact path="/" component={Home} />
          <Route path="/statement/:id" component={StatementView} />
        </div>
      </div>
    );
  }
}

export default App;
