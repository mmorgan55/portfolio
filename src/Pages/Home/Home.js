import React from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import './Home.css';

const Home = (props) => {

  return (
    <div className="Home">
    
      <p id="Title">HOME PAGE</p>

      <Image id="HomeImage" src="https://scx2.b-cdn.net/gfx/news/hires/2019/redwhitebutr.jpg" fluid thumbnail />

      <Button id="About" variant="primary">
        About Me
      </Button>

      <Button id="Resume" variant="primary">
        Resume
      </Button>

      <Button id="Projects" variant="primary">
        Projects
      </Button>

      <Button id="Contact" variant="primary">
        Contact
      </Button>


    </div>
  );
}

export default Home