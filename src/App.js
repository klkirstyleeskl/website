import React, { Component }from "react";
import './App.css';
import { 
  BrowserRouter as Router, 
  Route, Switch, 
  Link, Redirect } from "react-router-dom";

//Pages
import MainPage from './pages';
import Error from './pages/404';
import PoetryPage from './pages/poetryPage';
import PaintingPage from './pages/paintingPage';



class App extends Component {
  render() {
      return <Router>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/404"component={Error} />
            <Route exact path="/poetry"component={PoetryPage} />
            <Route exact path="/painting"component={PaintingPage} />
            <Redirect to="404"/>
          </Switch>
      </Router>
  }
}

export default App;
