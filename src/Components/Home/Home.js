import React from 'react'
import './Home.css'
import Card from "../Card/Card"
import Container from "react-bootstrap/Container"

const Home = (props) => {

  return (
    <div className="Home">
    
      <div id="Title">
        <Card text={"Matthew Morgan Portfolio"} />
      </div>

      <div id="About">
        <Card text={"About Me"} />
      </div>

      <div id="Resume">
        <Card text={"Resume"} />
      </div>

      <div id="Projects">
        <Card text={"Projects"} />
      </div>

      <div id="Other">
        <Card text={"Other"} />
      </div>

    </div>
  );
}

export default Home