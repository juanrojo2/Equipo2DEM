import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../pages/Inicio";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component="Inicio" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
