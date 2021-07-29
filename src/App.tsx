import React from "react";

import "antd/dist/antd.css";
import "./assets/scss/App.scss";

import Login from "./pages/Auth/Login";

const App = () => {
  return (
    <div className="App">
      <Login />
    </div>
  );
};

export default App;
