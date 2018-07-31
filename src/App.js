import React, { Component } from "react";
import "./App.css";
import HeaderLogo from "./components/HeaderLogo";
import StatementView from "./containers/StatementView";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-column">
          <HeaderLogo />
          <StatementView />
        </div>
      </div>
    );
  }
}

export default App;
