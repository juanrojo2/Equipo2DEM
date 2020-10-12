import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";
import singUp from "../pages/singUp";
import PagPrincipal from "../pages/PagPrincipal";
import PagNotas from "../pages/PagNotas";
import PagComentarios from "../pages/PagComentarios";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/singUp" component={singUp} />
          <Route exact path="/PagPrincipal" component={PagPrincipal} />
          <Route exact path="/PagNotas" component={PagNotas} />
          <Route exact path="/PagComentarios" component={PagComentarios} />
        </Switch>
      </Router>
    );
  }
}

export default App;
