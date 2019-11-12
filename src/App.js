import React from 'react';
import './App.css';
import Card from "./Components/Card/Card";
import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./Components/Home/Home"

class App extends React.Component {

  render() {

    return (
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Switch>
        </div>
      </Router>
    );

  }

}

export default App;
