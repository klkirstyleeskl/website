import React, { Component }from "react";
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, Switch, 
  Link, Redirect } from "react-router-dom";

//Pages
import MainPage from './pages';
import Error from './pages/404';



class App extends Component {
  render() {
      return <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route component={Error} />
          </Switch>
      </Router>
  }
}

export default App;
