import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PagLibrosUsuario from "../pages/PagLibrosUsuario";
import PagNotas from "../pages/PagNotas";
import PagComentarios from "../pages/PagComentarios";
import Alicia from "../pages/books/Alicia";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.css";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/SignUp" component={SignUp} />
          <Route exact path="/PagLibrosUsuario" component={PagLibrosUsuario} />
          <Route exact path="/PagNotas" component={PagNotas} />
          <Route exact path="/PagComentarios" component={PagComentarios} />
          <Route exact path="/Alicia" component={Alicia} />
        </Switch>
      </Router>
    );
  }
}

export default App;
