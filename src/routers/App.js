import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";
import singUp from "../pages/singUp";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exactpath="/" component={Inicio} />
        <Route exactpath="/" pages={Login} />
        <Route exactpath="/" pages={singUp} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
