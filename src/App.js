import React from 'react';
import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Resume from "./Pages/Resume/Resume";
import Contact from "./Pages/Contact/Contact";
import { NavigationBar } from "./Components/NavigationBar/NavigationBar"
import { Layout } from './Components/Layout/Layout';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
