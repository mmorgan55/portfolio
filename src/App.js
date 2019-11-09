import React from 'react';
import './App.css';
import Card from "./Components/Card/Card"

class App extends React.Component {

  render() {

    return (
      <div className="App">

        <div id="Title" className="cardTransform">
          <Card text={"Matthew Morgan Portfolio"}/>
        </div>

        <div id="About" className="cardTransform">
          <Card text={"About Me"}/>
        </div>

        <div id="Resume" className="cardTransform">
          <Card text={"Resume"}/>
        </div>

        <div id="Projects" className="cardTransform">
          <Card text={"Projects"}/>
        </div>

        <div id="Other" className="cardTransform">
          <Card text={"Other"}/>
        </div>

      </div>
    );

  }

  onMouseEnterEvent() {

  }

}

export default App;
