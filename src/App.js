import React from 'react';
import './App.css';
import Card from "./Components/Card/Card"

class App extends React.Component {

  render() {

    return (
      <div className="App">

        <div id="Title">
          <Card text={"Matthew Morgan Portfolio"}/>
        </div>

        <div id="About">
          <Card text={"About Me"}/>
        </div>

        <div id="Resume">
          <Card text={"Resume"}/>
        </div>

        <div id="Projects">
          <Card text={"Projects"}/>
        </div>

        <div id="Other">
          <Card text={"Other"}/>
        </div>

      </div>
    );

  }

  onMouseEnterEvent() {

  }

}

export default App;
