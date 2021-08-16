import React from "react";
import "./App.css";
import Bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyRouter from "./components/router/Router";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <MyRouter />
      </Router>
    </>
  );
}

export default App;
