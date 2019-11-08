import React from 'react';
import './App.css';
import Card from "./Components/Card/Card"

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <div className="cardHolder">
          <Card />
        </div>

      </div>
    );

  }

}

export default App;
