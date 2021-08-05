import React from "react";

import Routes from "./routes";
import { HttpHandler } from "./components";

import "antd/dist/antd.css";
import "./assets/scss/App.scss";

const App = () => {
  return (
    <div className="App">
      <HttpHandler />
      <Routes />
    </div>
  );
};

export default App;
