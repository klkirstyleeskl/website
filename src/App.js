import React, { Component }from "react";
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, Switch, 
  Link, Redirect } from "react-router-dom";

//Pages
import MainPage from './pages';
import Error from './pages/404';
import UsersPage from './pages/users';



class App extends Component {
  render() {
      return <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/404"component={Error} />
            <Route exact path="/users"component={UsersPage } />
            <Redirect to="404"/>
          </Switch>
      </Router>
  }
}

export default App;
