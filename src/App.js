import React from 'react';
import './App.css';
import Card from "./Components/Card/Card"

class App extends React.Component {

  render() {

    return (
      <div className="App">

        <div id="Title">
          <Card />
        </div>

        <div id="About">
          <Card />
        </div>

        <div id="Resume">
          <Card />
        </div>

        <div id="Projects">
          <Card />
        </div>

        <div id="Other">
          <Card />
        </div>

      </div>
    );

  }

}

export default App;
