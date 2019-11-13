import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Components/Home/Home";
import { NavigationBar } from "./Components/NavigationBar/NavigationBar"

class App extends React.Component {

  render() {

    return (
      <React.Fragment>
        <NavigationBar />
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
      </React.Fragment>

    );

  }

}

export default App;
