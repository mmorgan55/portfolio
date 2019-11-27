import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import { NavigationBar } from "./Components/NavigationBar/NavigationBar"

class App extends React.Component {

  render() {

    return (
      <>
        <Router>
          <NavigationBar />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route></Route>
            <Route></Route>
            <Route></Route>
          </Switch>
        </Router>
      </>
    );

  }

}

export default App;
